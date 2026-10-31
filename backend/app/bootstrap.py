"""Cuentas de prueba explícitas. Nunca se ejecuta automáticamente al arrancar."""
import argparse
import os
from .core import Settings, transaction, create_user, save
from .business import activate_plan
from .schemas import PlanInput


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--development', action='store_true', help='Crear tres cuentas locales con contraseña indicada en AGROVIO_DEV_PASSWORD')
    args = parser.parse_args()
    password = os.getenv('AGROVIO_DEV_PASSWORD', '')
    if not args.development or len(password) < 10:
        parser.error('Usa --development y define AGROVIO_DEV_PASSWORD (mínimo 10 caracteres).')
    with transaction(Settings.environment()) as conn:
        users = {}
        for role, name in [('admin', 'Administración Agrovio'), ('comprador', 'Bruno Gómez'), ('proveedor', 'Carlos Rodríguez')]:
            email = role + '@agrovio.test'
            previous = conn.execute('SELECT * FROM users WHERE email=?', (email,)).fetchone()
            users[role] = dict(previous) if previous else create_user(conn, email, password, name, 'Agrovio local', role)
        for role, quota in [('comprador', 30), ('proveedor', 8)]:
            activate_plan(conn, users['admin'], users[role]['id'], PlanInput(name='Prueba local', quota=quota, days=30, reference='Cuenta de desarrollo'))
        print('Cuentas locales disponibles: admin@agrovio.test, comprador@agrovio.test, proveedor@agrovio.test. Contraseña: la variable proporcionada.')


if __name__ == '__main__':
    main()
