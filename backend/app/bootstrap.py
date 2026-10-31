"""Cuentas locales explícitas; no se crean al iniciar el servidor."""
import argparse
import os
from .core import Settings, transaction, create_user, get, password_hash
from .business import activate_plan
from .schemas import PlanInput


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--development', action='store_true')
    args = parser.parse_args()
    password = os.getenv('AGROVIO_DEV_PASSWORD', '')
    if not args.development or len(password) < 10:
        parser.error('Usa --development y define AGROVIO_DEV_PASSWORD (mínimo 10 caracteres).')
    accounts = [('admin', 'Administración Agrovio', 'admin@demo.agrovio.pe'),
                ('comprador', 'Bruno Gómez', 'bruno@demo.agrovio.pe'),
                ('proveedor', 'Carlos Rodríguez', 'carlos@demo.agrovio.pe')]
    with transaction(Settings.environment()) as conn:
        users = {}
        for role, name, email in accounts:
            previous = conn.execute('SELECT * FROM users WHERE email=?', (email,)).fetchone()
            if previous:
                if previous['role'] != role:
                    raise ValueError(f'La cuenta {email} ya tiene otro rol; revisar antes de modificarla.')
                conn.execute('UPDATE users SET password=?, active=1 WHERE id=?', (password_hash(password), previous['id']))
                conn.execute('DELETE FROM sessions WHERE user_id=?', (previous['id'],))
                users[role] = dict(previous)
            else:
                users[role] = create_user(conn, email, password, name, 'Agrovio local', role)
        for role, quota in [('comprador', 30), ('proveedor', 8)]:
            if not get(conn, 'plans', users[role]['id']):
                activate_plan(conn, users['admin'], users[role]['id'], PlanInput(name='Prueba local', quota=quota, days=30, reference='Cuenta de desarrollo'))
        for role, _, email in accounts:
            print(f'{email}: {role}')
        print('Contraseña configurada desde AGROVIO_DEV_PASSWORD. Los planes existentes se conservan.')


if __name__ == '__main__':
    main()