from fastapi import APIRouter
import sqlite3 as db

c = db.connect('2.do-backend\database.db')
login = APIRouter(
    prefix="/login"
)

@login.get('/, tags=["login"])')
async def loginRoute():
    print(c.total_changes)
    return {"loginAttempt": "Successful"} 