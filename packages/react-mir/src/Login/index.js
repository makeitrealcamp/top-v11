import React, { useState, useContext } from 'react';
import './style.scss';
import { UserContext } from '../App';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useContext(UserContext);

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = { email, password };
    fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(credentials)
    })
      .then(response => response.json())
      .then(res => {
        setUser(res.data);
      });
  }

  return(
    <div className='login-container'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input 
            type='email'
            required
            onChange={ e => setEmail(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input 
            type='text' 
            required
            onChange={ e => setPassword(e.target.value)} 
          />
        </label>
        <p>validateForm: {validateForm()} { validateForm() ? 'It looks good!' : 'Please fill form' }</p>
        <button type='submit' disabled={!validateForm}>Login</button>
      </form>
    </div>    
  );
}

export default Login;

