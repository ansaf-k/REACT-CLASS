import React, { useState } from 'react';
import SignUp from './componet/SignUp';
import Login from './componet/Login';
import Welcome from './componet/welcome';
import './componet/SignUp.css'

function App() {
  const [userName, setUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // Default to sign-up page

  const handleLogin = (name) => {
    setUserName(name);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUserName('');
    setIsLoggedIn(false);
    setShowLogin(false);  // Reset to show sign-up page after logout
    localStorage.clear(); // Clears the stored user data
  };

  const switchToLogin = () => {
    setShowLogin(true); // Switch to the login page after successful signup
  };

  return (
    <div>
      <h1>Registration Form</h1>
      {!isLoggedIn ? (
        <>
          <button onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? 'Go to Sign Up' : 'Go to Login'}</button>
          {showLogin ? (
            <Login onLogin={handleLogin} />
          ) : (
            <SignUp onSignUpSuccess={switchToLogin} />
          )}
        </>
      ) : (
        <Welcome userName={userName} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;