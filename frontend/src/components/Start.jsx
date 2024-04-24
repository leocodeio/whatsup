import React from 'react';
import whatsup from './artifacts/whatsup.png'; 

const Start = () => {
  return (
    <header className="start-header">
      <img src={whatsup} alt="Whatsup Logo" className="start-img" />
      <h5>WHATSUP WEB</h5>
    </header>
  );
};

export default Start;
