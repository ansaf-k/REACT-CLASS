import React from 'react';
import './SignUp.css'

function Welcome({ userName, onLogout }) {
  return (
    <div className="container welcome-message">
      <h2>Welcome, {userName}!</h2>
      <p>You've successfully logged in.</p>
      <button className="logout" onClick={onLogout}>Logout</button>
    </div>
  );
}


export default Welcome;
