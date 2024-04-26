import React, { useState } from 'react'

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, pass);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <section>
        <label htmlFor='name'>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='yourName' />
        </section>

        <section>
        <label htmlFor='email'>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='youremail' />
        </section>

        <section>
        <label htmlFor='password'>Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='password' />
        </section>
        
        <button type='submit' className='account-manage-button'>Sign Up</button>
      </form>
      <button onClick={() => props.onFormSwitch('yes')}>Don't have an account? Create here</button>
    </>
  )
}

export default Register
