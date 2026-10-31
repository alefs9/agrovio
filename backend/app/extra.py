"""Mantenimiento y evaluación interna de confiabilidad, sin puntuación pública inventada."""
from pydantic import BaseModel, Field
from fastapi import Depends
from .api.portal import router
from .core import all_records, audit, current_user, db, fail, require, save, stamp, uid


class Assessment(BaseModel):
    phase: str = Field(pattern='^(pre|post)$')
    note: str = Field(min_length=3, max_length=2000)


@router.post('/admin/users/{key}/reliability', tags=['reputation'])
def assess(key: str, body: Assessment, user=Depends(current_user), conn=Depends(db)):
    require(user, 'admin')
    if not conn.execute('SELECT id FROM users WHERE id=?', (key,)).fetchone():
        fail('Usuario no encontrado.', 404)
    item = save(conn, 'reliability', {'id': uid(), 'user_id': key, 'phase': body.phase, 'note': body.note, 'at': stamp(), 'reviewed_by': user['id']})
    audit(conn, user, 'account.reliability', key)
    return item


@router.get('/admin/users/{key}/reliability', tags=['reputation'])
def assessments(key: str, user=Depends(current_user), conn=Depends(db)):
    require(user, 'admin')
    return [a for a in all_records(conn, 'reliability') if a['user_id'] == key]
