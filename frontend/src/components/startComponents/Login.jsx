// login.jsx
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AccountContext } from '../../context/AccountDetails';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setIsLogged} = useContext(AccountContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      console.log('Response:', response);
  
      if (response.status === 200) {
        console.log('Login successful');
        // props.setIsLogged(true);
        setIsLogged("yes");
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor='email'>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            id='email'
            placeholder='Your email'
            required
          />
        </section>

        <section>
          <label htmlFor='password'>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            id='password'
            placeholder='Password'
            required
          />
        </section>

        <button type='submit'>Login</button>
      </form>
      <button onClick={() => props.onFormSwitch('no')}>Don't have an account? Create here</button>
    </>
  );
};

export default Login;
