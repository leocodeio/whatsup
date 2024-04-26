import React, { useState } from 'react'

const Login = (props) => {

  const [email,setEmail]= useState('');
  const [pass,setPass]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, pass);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        
        <section>
        <label htmlFor='email'>Email</label>
        <input value={email} onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='youremail' />
        </section>
        
        <section>
        <label htmlFor='password'>Password</label>
        <input value={pass} onChange={(e)=> setPass(e.target.value)} type='password' placeholder='password' />
        </section>

        <button type='submit' className='account-manage-button'>Log In</button>
      </form>
      <button onClick={() => props.onFormSwitch('no')}>Don't have an account? Create here</button>

    </>
  )
}

export default Login
