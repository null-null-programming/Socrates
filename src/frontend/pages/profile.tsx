// frontend/pages/profile.tsx
import React, { useState, useEffect } from 'react';
import NavigationBar from '../components/NavigationBar';

interface UserProfile {
  id: number;
  username: string;
  email: string;
}

const ProfilePage: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No authentication token found.');
        }
        const response = await fetch(`${apiUrl}/users/me`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('User profile could not be fetched.');
        }
        const data = await response.json();
        setUserProfile(data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setUserProfile(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (!userProfile) {
    return <p>User profile not available.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <NavigationBar username={userProfile.username} />
      <div className="container mx-auto p-8">
        <div className="bg-white rounded shadow p-6">
          <h1 className="text-2xl font-bold mb-4">Profile</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={userProfile.username}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              disabled
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={userProfile.email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
