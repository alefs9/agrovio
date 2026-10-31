"""Preparar cuentas para verify-separated.mjs exclusivamente dentro de .local."""
import os
import sys
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'backend'))
from app.core import Settings, create_user, transaction
from app.business import activate_plan
from app.schemas import PlanInput

settings = Settings.environment()
database = Path(settings.database).resolve()
if not database.is_relative_to((ROOT / '.local').resolve()):
    raise SystemExit('Define DATABASE_PATH dentro de .local. No se preparan cuentas de QA sobre una base normal.')
password = os.getenv('AGROVIO_QA_PASSWORD', '')
if len(password) < 10:
    raise SystemExit('Define AGROVIO_QA_PASSWORD con al menos 10 caracteres.')
with transaction(settings) as conn:
    users = {}
    for role in ['admin', 'comprador', 'proveedor']:
        row = conn.execute('SELECT * FROM users WHERE email=?', (role + '@qa.test',)).fetchone()
        users[role] = dict(row) if row else create_user(conn, role + '@qa.test', password, role.title() + ' QA', 'Empresa QA', role)
    for role in ['comprador', 'proveedor']:
        activate_plan(conn, users['admin'], users[role]['id'], PlanInput(name='QA', quota=1000, reference='QA ' + datetime.now(timezone.utc).isoformat(), days=30))
print('Cuentas de QA preparadas exclusivamente en la base local indicada.')
