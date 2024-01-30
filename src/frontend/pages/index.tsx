// frontend/pages/index.tsx
import React from 'react';
import NavigationBar from '../components/NavigationBar';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavigationBar />
      <div className="container mx-auto p-8">
        <div className="bg-white rounded shadow p-6">
          <h1 className="text-2xl font-bold mb-4">Welcome to the Debate Platform</h1>
          <p className="text-gray-700">
            Engage in meaningful discussions, share your opinions, and challenge your critical thinking skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
