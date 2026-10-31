"""Persistencia transaccional e identidad para una instalación de un solo nodo."""
import base64
import hashlib
import hmac
import json
import os
import secrets
import sqlite3
import uuid
from contextlib import contextmanager
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from pathlib import Path

from fastapi import Depends, HTTPException, Request


def now():
    return datetime.now(timezone.utc)


def stamp(value=None):
    return (value or now()).isoformat()


def date(value):
    return datetime.fromisoformat(value)


def fail(message, status=409):
    raise HTTPException(status, message)


@dataclass
class Settings:
    database: str
    media: str
    origins: list[str]
    secure_cookie: bool = False
    whatsapp_number: str = ""

    @classmethod
    def environment(cls):
        root = Path(__file__).resolve().parents[1]
        return cls(os.getenv("DATABASE_PATH", str(root / "data/agrovio.sqlite3")), os.getenv("MEDIA_PATH", str(root / "data/media")), [s.strip() for s in os.getenv("CORS_ORIGINS", "http://localhost:5175,http://127.0.0.1:5175,http://127.0.0.1:5180,http://localhost:4173").split(",") if s.strip()], os.getenv("COOKIE_SECURE", "false").lower() == "true", os.getenv("WHATSAPP_NUMBER", ""))


def connect(settings):
    Path(settings.database).parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(settings.database, timeout=20, check_same_thread=False)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys=ON")
    conn.execute("PRAGMA journal_mode=WAL")
    conn.executescript("""
    CREATE TABLE IF NOT EXISTS users(id TEXT PRIMARY KEY, email TEXT NOT NULL UNIQUE COLLATE NOCASE, password TEXT NOT NULL, name TEXT NOT NULL, company TEXT NOT NULL, phone TEXT NOT NULL DEFAULT '', role TEXT NOT NULL CHECK(role IN ('comprador','proveedor','admin')), active INTEGER NOT NULL DEFAULT 1, created_at TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS sessions(token TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id), expires TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS records(kind TEXT NOT NULL, id TEXT NOT NULL, data TEXT NOT NULL, PRIMARY KEY(kind,id));
    CREATE INDEX IF NOT EXISTS records_kind ON records(kind);
    CREATE TABLE IF NOT EXISTS audit(id TEXT PRIMARY KEY, user_id TEXT NOT NULL, event TEXT NOT NULL, subject TEXT NOT NULL, at TEXT NOT NULL);
    """)
    return conn


@contextmanager
def transaction(settings):
    conn = connect(settings)
    try:
        conn.execute("BEGIN IMMEDIATE")
        yield conn
        conn.commit()
    except Exception:
        conn.rollback()
        raise
    finally:
        conn.close()


def db(request: Request):
    with transaction(request.app.state.settings) as conn:
        expire(conn)
        yield conn


def uid():
    return str(uuid.uuid4())


def all_records(conn, kind):
    return [json.loads(row[0]) for row in conn.execute("SELECT data FROM records WHERE kind=? ORDER BY rowid", (kind,))]


def get(conn, kind, key):
    row = conn.execute("SELECT data FROM records WHERE kind=? AND id=?", (kind, key)).fetchone()
    return json.loads(row[0]) if row else None


def save(conn, kind, item):
    conn.execute("INSERT INTO records(kind,id,data) VALUES(?,?,?) ON CONFLICT(kind,id) DO UPDATE SET data=excluded.data", (kind, item['id'], json.dumps(item, ensure_ascii=False)))
    return item


def record(conn, kind, key):
    value = get(conn, kind, key)
    if value is None:
        fail("Recurso no encontrado.", 404)
    return value


def audit(conn, user, event, subject):
    conn.execute("INSERT INTO audit VALUES(?,?,?,?,?)", (uid(), user['id'], event, subject, stamp()))


def password_hash(password):
    salt = secrets.token_hex(16)
    value = hashlib.pbkdf2_hmac('sha256', password.encode(), bytes.fromhex(salt), 600000)
    return salt + ':' + value.hex()


def password_valid(password, stored):
    salt, expected = stored.split(':')
    value = hashlib.pbkdf2_hmac('sha256', password.encode(), bytes.fromhex(salt), 600000).hex()
    return hmac.compare_digest(value, expected)


def create_user(conn, email, password, name, company, role, phone=''):
    if role not in ('comprador', 'proveedor', 'admin'):
        fail('Perfil inválido.', 422)
    email = email.strip().lower()
    if '@' not in email or any(c.isspace() for c in email) or len(password) < 10 or not name.strip() or not company.strip():
        fail('Correo válido y contraseña de al menos 10 caracteres requeridos.', 422)
    user = dict(id=uid(), email=email, name=name.strip(), company=company.strip(), role=role, phone=phone, active=1, created_at=stamp())
    try:
        conn.execute("INSERT INTO users(id,email,password,name,company,phone,role,created_at) VALUES(?,?,?,?,?,?,?,?)", (user['id'], email, password_hash(password), user['name'], user['company'], phone, role, user['created_at']))
    except sqlite3.IntegrityError:
        fail('El correo ya está registrado.', 409)
    return user


def session(conn, user):
    token = secrets.token_urlsafe(40)
    conn.execute("INSERT INTO sessions VALUES(?,?,?)", (hashlib.sha256(token.encode()).hexdigest(), user['id'], stamp(now() + timedelta(days=7))))
    return token


def current_user(request: Request, conn=Depends(db)):
    token = request.cookies.get('agrovio_session', '')
    hashed = hashlib.sha256(token.encode()).hexdigest()
    user = conn.execute("SELECT u.* FROM users u JOIN sessions s ON s.user_id=u.id WHERE s.token=? AND s.expires>? AND u.active=1", (hashed, stamp())).fetchone()
    if not user:
        fail('Inicia sesión para continuar.', 401)
    return dict(user)


def require(user, *roles):
    if user['role'] not in roles:
        fail('No tienes permiso para esta operación.', 403)


def cycle(user):
    age = max(0, (now() - date(user['created_at'])).total_seconds())
    return int(age // (30 * 86400))


def expire(conn):
    for plan in all_records(conn, 'plans'):
        if date(plan['expires']) <= now() and plan.get('active'):
            plan['active'] = False
            plan['credits'] = 0
            save(conn, 'plans', plan)
            owner = conn.execute('SELECT role FROM users WHERE id=?', (plan['id'],)).fetchone()
            if owner and owner['role'] == 'proveedor':
                for p in all_records(conn, 'listings'):
                    if p['owner_id'] == plan['id'] and p['status'] != 'Eliminada':
                        p['status'] = 'Eliminada'
                        save(conn, 'listings', p)


def active_plan(conn, user):
    expire(conn)
    plan = get(conn, 'plans', user['id'])
    if not plan or not plan.get('active') or date(plan['expires']) <= now():
        fail('Tu cuenta necesita un plan activo.', 409)
    if user['role'] == 'comprador' and plan.get('cycle') != cycle(user):
        plan['credits'] = 0
        plan['cycle'] = cycle(user)
        save(conn, 'plans', plan)
    return plan


def owner_or_admin(user, listing):
    if user['role'] != 'admin' and user['id'] != listing['owner_id']:
        fail('No puedes gestionar un producto de otra cuenta.', 403)


def money_cents(value):
    from decimal import Decimal, ROUND_HALF_UP
    return int((Decimal(str(value)) * 100).quantize(Decimal('1'), rounding=ROUND_HALF_UP))


def store_photo(source, settings):
    if not source:
        return ''
    if source.startswith('/media/'):
        if '/' in source[len('/media/'):] or not (Path(settings.media) / source.split('/')[-1]).is_file():
            fail('Imagen no encontrada.', 422)
        return source
    try:
        header, encoded = source.split(',', 1)
        data = base64.b64decode(encoded, validate=True)
    except Exception:
        fail('Envía una fotografía JPG, PNG o WebP válida.', 422)
    if len(data) > 1024 * 1024:
        fail('La foto no puede superar 1 MB.', 422)
    ext = 'png' if data.startswith(b'\x89PNG\r\n\x1a\n') else 'jpg' if data.startswith(b'\xff\xd8\xff') else 'webp' if data.startswith(b'RIFF') and data[8:12] == b'WEBP' else None
    if not ext or header != 'data:image/' + ('jpeg' if ext == 'jpg' else ext) + ';base64':
        fail('Formato de fotografía inválido.', 422)
    Path(settings.media).mkdir(parents=True, exist_ok=True)
    filename = uid() + '.' + ext
    (Path(settings.media) / filename).write_bytes(data)
    return '/media/' + filename
