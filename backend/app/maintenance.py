from .core import Settings, expire, transaction


if __name__ == '__main__':
    with transaction(Settings.environment()) as conn:
        expire(conn)
    print('Vencimientos aplicados. No se enviaron cobros ni mensajes externos.')
