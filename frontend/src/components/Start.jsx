import React from "react";
import whatsup from "./artifacts/whatsup.png";

const Start = () => {
  return (
    <>
      <header className="start-header">
        <img src={whatsup} alt="Whatsup Logo" className="start-img" />
        <h5 className="start-heading">WHATSUP WEB</h5>
      </header>
      <div className="start-body">
        <div className="start-card">hello</div>
      </div>
    </>
  );
};

export default Start;
