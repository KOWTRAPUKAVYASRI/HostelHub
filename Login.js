//loginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState(''); // Declare state for username
  const [password, setPassword] = useState(''); // Declare state for password
  const [message, setMessage] = useState('');
  const [alertType, setAlertType] = useState('error');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!username || !password) {
      setMessage('Please enter all fields.');
      setAlertType('error');
    } else {
      // Simulate a successful login
      setMessage('Login successful!');
      setAlertType('correct');
      navigate('/Home'); // Redirect to Home page
    }
  };

  return (
    <div className="container" style={{ backgroundColor: 'white' }}>
      <form className="container1" onSubmit={handleSubmit} style={{ padding: "20px", backgroundColor: 'white' }}>
        <h1 className="heading" style={{ fontSize: '30px' }}>Login</h1>

        <input 
          type="text" 
          className="inp" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
          style={{ width: "90%", margin: "10px" }}
        />

        <input 
          type="password" 
          className="inp2" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={{ margin: "10px", width: "90%" }}
        />

        <button type="submit" className='sub' style={{ margin: "5px", backgroundColor: "lightblue" }}>
          Login
        </button>

        {message && (
          <h3 className={`alert alerttype ${alertType}`} style={{ margin: "10px", textAlign: "center" }}>
            {message}
          </h3>
        )}
      </form>
    </div>
  );
};

export default LoginForm;

