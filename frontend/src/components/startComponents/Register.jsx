import React, { useState } from 'react';
import axios from 'axios';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/signup', { email, password, name });
      console.log(response.data);
      props.onFormSwitch('yes');
      alert("Signup success!!");
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="p-5 border border-black rounded-lg">
        <section className="flex flex-col mb-5">
          <label htmlFor='name' className="text-black mb-2">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            placeholder='Your name'
            required
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
        </section>

        <section className="flex flex-col mb-5">
          <label htmlFor='email' className="text-black mb-2">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='Your email'
            required
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
        </section>

        <section className="flex flex-col mb-5">
          <label htmlFor='password' className="text-black mb-2">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Password'
            required
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
        </section>
        
        <button type='submit' className="w-full p-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-150">Sign Up</button>
      </form>
      <button onClick={() => props.onFormSwitch('yes')} className="mt-5 text-blue-500 hover:underline">Already have an account? Log in here</button>
    </>
  );
};

export default Register;
