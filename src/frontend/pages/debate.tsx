// frontend/pages/debate.tsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import NavigationBar from '../components/NavigationBar';
import DebateRoom from '../components/DebateRoom';

const DebatePage: React.FC = () => {
  const router = useRouter();
  const { debateId } = router.query;
  const [topic, setTopic] = useState<string>('Loading debate topic...');
  const [userId, setUserId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

    const fetchDebateTopic = async () => {
      if (!debateId) return;
      try {
        const response = await fetch(`${apiUrl}/debates/${debateId}`);
        if (!response.ok) {
          throw new Error('Debate topic could not be fetched.');
        }
        const data = await response.json();
        setTopic(data.topic);
      } catch (error) {
        console.error('Error fetching debate topic:', error);
        setTopic('Error loading topic');
      }
    };

    const fetchUserId = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/login');
          return;
        }
        const response = await fetch(`${apiUrl}/users/me`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('User information could not be fetched.');
        }
        const data = await response.json();
        setUserId(data.id);
      } catch (error) {
        console.error('Error fetching user ID:', error);
        setUserId(null);
      }
    };

    const fetchData = async () => {
      await fetchDebateTopic();
      await fetchUserId();
      setLoading(false);
    };

    fetchData();
  }, [debateId, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!debateId || isNaN(Number(debateId)) || userId === null) {
    return <p>Invalid debate ID or user not authenticated.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <NavigationBar username={userId ? `User ${userId}` : undefined} />
      <div className="container mx-auto p-8">
        <div className="bg-white rounded shadow p-6">
          <DebateRoom debateId={Number(debateId)} topic={topic} userId={userId} />
        </div>
      </div>
    </div>
  );
};

export default DebatePage;
