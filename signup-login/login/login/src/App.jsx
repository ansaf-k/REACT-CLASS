import React, { useState } from 'react';
import SignUp from './componet/SignUp';
import Login from './componet/Login';
import Welcome from './componet/welcome';
import './componet/SignUp.css'

function App() {
  const [userName, setUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = (name) => {
    setUserName(name);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUserName('');
    setIsLoggedIn(false);
    localStorage.clear(); // Clears the stored user data
  };

  return (
    <div>
      {!isLoggedIn ? (
        <>
          <button onClick={() => setShowLogin(!showLogin)}>
            {showLogin ? 'Go to Sign Up' : 'Go to Login'}
          </button>
          {showLogin ? (
            <Login onLogin={handleLogin} />
          ) : (
            <SignUp />
          )}
        </>
      ) : (
        <Welcome userName={userName} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
