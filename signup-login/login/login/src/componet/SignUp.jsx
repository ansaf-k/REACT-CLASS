import React, { useState } from 'react';
import './SignUp.css'

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    if(!name || !email || !password){
      setError('Please fill in all fields');
      setSuccess('');
      return;
    }

    // Check if the user already exists in localStorage
    const existingUser = JSON.parse(localStorage.getItem('user'));
    if (existingUser && existingUser.email === email) {
      setError('User already exists. Please log in.');
      return;
    }

    // Create a user object
    const user = {
      name,
      email,
      password,
    };

    // Store user details in local storage
    localStorage.setItem('user', JSON.stringify(user));

    // Clear the form
    setName('');
    setEmail('');
    setPassword('');
    setError('');
    setSuccess('User registered successfully! Please log in.');
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
 }

export default SignUp;
