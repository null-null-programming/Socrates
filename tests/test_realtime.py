## test_realtime.py
import asyncio
import unittest
from unittest.mock import AsyncMock, MagicMock, patch

## Import the ConnectionManager and RealTime classes from the appropriate path
from realtime import ConnectionManager, RealTime

## <TEST_CASES_FOR_CONNECTIONMANAGER>
class TestConnectionManager(unittest.IsolatedAsyncioTestCase):
    def setUp(self):
        self.manager = ConnectionManager()
        self.websocket_mock = AsyncMock(spec=WebSocket)
        self.debate_id = 1

    async def test_connect_new_debate(self):
        """Test connecting a websocket to a new debate."""
        await self.manager.connect(self.websocket_mock, self.debate_id)
        self.assertIn(self.debate_id, self.manager.active_connections)
        self.assertIn(self.websocket_mock, self.manager.active_connections[self.debate_id])

    async def test_connect_existing_debate(self):
        """Test connecting a websocket to an existing debate."""
        await self.manager.connect(self.websocket_mock, self.debate_id)
        another_websocket_mock = AsyncMock(spec=WebSocket)
        await self.manager.connect(another_websocket_mock, self.debate_id)
        self.assertEqual(len(self.manager.active_connections[self.debate_id]), 2)

    async def test_disconnect(self):
        """Test disconnecting a websocket from a debate."""
        await self.manager.connect(self.websocket_mock, self.debate_id)
        await self.manager.disconnect(self.websocket_mock, self.debate_id)
        self.assertNotIn(self.websocket_mock, self.manager.active_connections.get(self.debate_id, []))

    async def test_send_personal_message(self):
        """Test sending a personal message to a websocket."""
        message = "Hello"
        await self.manager.send_personal_message(message, self.websocket_mock)
        self.websocket_mock.send_text.assert_awaited_with(message)

    async def test_broadcast(self):
        """Test broadcasting a message to all websockets in a debate."""
        message = "Update"
        another_websocket_mock = AsyncMock(spec=WebSocket)
        await self.manager.connect(self.websocket_mock, self.debate_id)
        await self.manager.connect(another_websocket_mock, self.debate_id)
        await self.manager.broadcast(message, self.debate_id)
        self.websocket_mock.send_text.assert_awaited_with(message)
        another_websocket_mock.send_text.assert_awaited_with(message)

    async def test_broadcast_with_disconnection(self):
        """Test broadcasting a message when a websocket disconnects in the process."""
        message = "Update"
        another_websocket_mock = AsyncMock(spec=WebSocket)
        another_websocket_mock.send_text.side_effect = WebSocketDisconnect
        await self.manager.connect(self.websocket_mock, self.debate_id)
        await self.manager.connect(another_websocket_mock, self.debate_id)
        await self.manager.broadcast(message, self.debate_id)
        self.websocket_mock.send_text.assert_awaited_with(message)
        self.assertNotIn(another_websocket_mock, self.manager.active_connections[self.debate_id])

## <TEST_CASES_FOR_REALTIME>
class TestRealTime(unittest.IsolatedAsyncioTestCase):
    def setUp(self):
        self.realtime = RealTime()
        self.websocket_mock = AsyncMock(spec=WebSocket)
        self.debate_id = 1
        self.topic = "Test Topic"

    async def test_subscribe(self):
        """Test subscribing a websocket to a debate."""
        with patch.object(self.realtime.manager, 'connect') as connect_mock, \
             patch.object(self.realtime.manager, 'send_personal_message') as send_personal_message_mock:
            await self.realtime.subscribe(self.websocket_mock, self.debate_id, self.topic)
            connect_mock.assert_awaited_with(self.websocket_mock, self.debate_id)
            send_personal_message_mock.assert_awaited_with(f"You are now connected to debate {self.topic}.", self.websocket_mock)

    async def test_unsubscribe(self):
        """Test unsubscribing a websocket from a debate."""
        with patch.object(self.realtime.manager, 'disconnect') as disconnect_mock:
            await self.realtime.unsubscribe(self.websocket_mock, self.debate_id)
            disconnect_mock.assert_awaited_with(self.websocket_mock, self.debate_id)

    async def test_broadcast_update(self):
        """Test broadcasting an update to a debate."""
        message = "Debate Update"
        with patch.object(self.realtime.manager, 'broadcast') as broadcast_mock:
            await self.realtime.broadcast_update(self.debate_id, message)
            broadcast_mock.assert_awaited_with(message, self.debate_id)

if __name__ == '__main__':
    asyncio.run(unittest.main())
