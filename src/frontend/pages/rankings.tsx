//frontend/pages/rankings.tsx
import React, { useEffect, useState } from 'react';
import NavigationBar from '../components/NavigationBar';

interface RankingEntry {
  userId: number;
  score: number;
  username: string;
}

const RankingsPage: React.FC = () => {
  const [rankings, setRankings] = useState<RankingEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

    const fetchRankings = async () => {
      try {
        const response = await fetch(`${apiUrl}/rankings`);
        if (!response.ok) {
          throw new Error('Rankings could not be fetched.');
        }
        const data: RankingEntry[] = await response.json();
        setRankings(data);
      } catch (error) {
        console.error('Error fetching rankings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRankings();
  }, []);

  if (loading) {
    return <p>Loading rankings...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <NavigationBar />
      <div className="container mx-auto p-8">
        <div className="bg-white rounded shadow p-6">
          <h1 className="text-2xl font-bold mb-4">Rankings</h1>
          <table className="min-w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Position</th>
                <th className="px-4 py-2">Username</th>
                <th className="px-4 py-2">Score</th>
              </tr>
            </thead>
            <tbody>
              {rankings.map((entry, index) => (
                <tr key={entry.userId} className="border-b">
                  <td className="px-4 py-2 text-center">{index + 1}</td>
                  <td className="px-4 py-2">{entry.username}</td>
                  <td className="px-4 py-2 text-center">{entry.score.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RankingsPage;
