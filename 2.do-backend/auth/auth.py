from fastapi import APIRouter
import sqlite3 as db

c = db.connect('2.do-backend\database.db')
router = APIRouter()

@router.get('/login')
async def login():
    print(c.total_changes)
    return {"loginAttempt": "Successful"}