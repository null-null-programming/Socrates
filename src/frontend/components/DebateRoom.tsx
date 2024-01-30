// frontend/components/DebateRoom.tsx
import React, { useState, useEffect } from 'react';

interface Contribution {
  user_id: number;
  content: string;
}

interface DebateRoomProps {
  debateId: number;
  topic: string;
  userId: number;
}

const DebateRoom: React.FC<DebateRoomProps> = ({ debateId, topic, userId }) => {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [newContribution, setNewContribution] = useState<string>('');
  const [ws, setWs] = useState<WebSocket | null>(null);

  const websocketUrl = process.env.REACT_APP_WEBSOCKET_URL || 'ws://localhost:8000';

  useEffect(() => {
    // Establish WebSocket connection only once when the component mounts
    const websocket = new WebSocket(`${websocketUrl}/ws/debates/${debateId}/`);
    setWs(websocket);

    websocket.onopen = () => {
      console.log('WebSocket connected');
    };

    websocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'new_contribution') {
        setContributions((prevContributions) => [...prevContributions, data.contribution]);
      }
    };

    websocket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    websocket.onclose = () => {
      console.log('WebSocket disconnected');
      // Implement reconnection logic if needed
    };

    // Clean up WebSocket connection when the component unmounts
    return () => {
      websocket.close();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this effect runs only once

  const handleContributionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewContribution(event.target.value);
  };

  const handleContributionSubmit = async () => {
    if (newContribution.trim() === '') {
      alert('Contribution content cannot be empty.');
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:8000'}/debates/${debateId}/contributions/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming the token is stored in localStorage
        },
        body: JSON.stringify({ content: newContribution }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to submit contribution');
      }

      const result = await response.json();
      setContributions((prevContributions) => [...prevContributions, { user_id: userId, content: newContribution }]);
      setNewContribution('');
    } catch (error) {
      console.error('Error submitting contribution:', error);
      alert(error.message);
    }
  };

  return (
    <div className="debate-room">
      <h2 className="text-xl font-bold mb-4">{`Debate Topic: ${topic}`}</h2>
      <div className="contributions">
        {contributions.map((contribution, index) => (
          <div key={index} className="contribution">
            <strong>User {contribution.user_id}:</strong> {contribution.content}
          </div>
        ))}
      </div>
      <textarea
        className="new-contribution"
        value={newContribution}
        onChange={handleContributionChange}
        placeholder="Share your thoughts..."
      />
      <button onClick={handleContributionSubmit} className="submit-contribution">
        Submit
      </button>
    </div>
  );
};

export default DebateRoom;
