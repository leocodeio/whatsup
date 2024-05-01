import axios from 'axios';
import React, { useState } from 'react';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/signup', { email, password, name });
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor='name'>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='yourName' required />
        </section>

        <section>
          <label htmlFor='email'>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='youremail'required />
        </section>

        <section>
          <label htmlFor='password'>Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='password' required />
        </section>
        
        <button type='submit' className='account-manage-button'>Sign Up</button>
      </form>
      <button onClick={() => props.onFormSwitch('yes')}>Don't have an account? Create here</button>
    </>
  )
}

export default Register;
