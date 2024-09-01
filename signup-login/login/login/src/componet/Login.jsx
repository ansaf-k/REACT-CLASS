import React, { useState } from 'react';
import './SignUp.css'

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Get user details from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
      if (storedUser.email === email && storedUser.password === password) {
        onLogin(storedUser.name);
      } else {
        setError('Invalid email or password');
      }
    } else {
      setError('No user found, please sign up first.');
    }

    // Clear the form
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {error && <p style={{ color: 'green' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
