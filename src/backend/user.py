from pydantic import BaseModel, EmailStr
from typing import Optional
import bcrypt
from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from . import models

class UserBase(BaseModel):
    username: str
    email: EmailStr

class UserCreate(UserBase):
    password: str

class UserInDB(UserBase):
    id: int
    password_hash: str

# Assume the database model for User is defined in models.py

class User(UserInDB):
    @staticmethod
    def create_user(db: Session, user_create: UserCreate) -> UserInDB:
        # Check if the username or email already exists in the database
        existing_user = db.query(models.User).filter(
            (models.User.username == user_create.username) | 
            (models.User.email == user_create.email)
        ).first()
        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Username or email already registered."
            )
        
        # Proceed with user creation
        try:
            hashed_password = bcrypt.hashpw(user_create.password.encode('utf-8'), bcrypt.gensalt())
            db_user = models.User(
                username=user_create.username,
                email=user_create.email,
                password_hash=hashed_password.decode('utf-8')
            )
            db.add(db_user)
            db.commit()
            db.refresh(db_user)
            return UserInDB.from_orm(db_user)
        except Exception as e:
            db.rollback()
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))

    @staticmethod
    def authenticate_user(db: Session, username: str, password: str) -> Optional[UserInDB]:
        try:
            db_user = db.query(models.User).filter(models.User.username == username).first()
            if not db_user:
                return None
            if not bcrypt.checkpw(password.encode('utf-8'), db_user.password_hash.encode('utf-8')):
                return None
            return UserInDB.from_orm(db_user)
        except Exception as e:
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))

# Example usage and session factory import should be defined elsewhere in the codebase.
