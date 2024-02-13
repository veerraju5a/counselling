// HomePage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const username = location.state?.username || '';

  return (
    <div>
      <h2>Welcome, {username}!</h2>
      {/* Other content of the home page */}
    </div>
  );
};

export default HomePage;