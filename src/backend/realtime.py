## realtime.py
from typing import Dict, List
from fastapi import WebSocket, WebSocketDisconnect

class ConnectionManager:
    def __init__(self):
        self.active_connections: Dict[int, List[WebSocket]] = {}

    async def connect(self, websocket: WebSocket, debate_id: int):
        await websocket.accept()
        if debate_id not in self.active_connections:
            self.active_connections[debate_id] = []
        self.active_connections[debate_id].append(websocket)

    async def disconnect(self, websocket: WebSocket, debate_id: int):
        if debate_id in self.active_connections and websocket in self.active_connections[debate_id]:
            self.active_connections[debate_id].remove(websocket)
            if not self.active_connections[debate_id]:
                del self.active_connections[debate_id]

    async def send_personal_message(self, message: str, websocket: WebSocket):
        await websocket.send_text(message)

    async def broadcast(self, message: str, debate_id: int):
        if debate_id in self.active_connections:
            for connection in self.active_connections[debate_id][:]:
                try:
                    await connection.send_text(message)
                except WebSocketDisconnect:
                    await self.disconnect(connection, debate_id)

class RealTime:
    def __init__(self):
        self.manager = ConnectionManager()

    async def subscribe(self, websocket: WebSocket, debate_id: int, topic: str) -> None:
        await self.manager.connect(websocket, debate_id)
        await self.manager.send_personal_message(f"You are now connected to debate {topic}.", websocket)

    async def unsubscribe(self, websocket: WebSocket, debate_id: int) -> None:
        await self.manager.disconnect(websocket, debate_id)

    async def broadcast_update(self, debate_id: int, message: str) -> None:
        await self.manager.broadcast(message, debate_id)
