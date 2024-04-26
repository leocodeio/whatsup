import React, { useState } from "react";
import whatsup from "./artifacts/whatsup.png";
import Register from "./login_signup/Register";
import Login from "./login_signup/Login";
  
const Start = () => {
  const [isUser, setisUser] = useState("yes");

  const toggle = (decision) => {
    setisUser(decision);
  };

  return (
    <>
      <header className="start-header">
        <img src={whatsup} alt="Whatsup Logo" className="start-img" />
        <h5 className="start-heading">WHATSUP WEB</h5>
      </header>
      <div className="start-body">
        <div className="start-card">
          <div className="how-to-use">
            <h4>How to use ?</h4>
            <h4>How to use ?</h4>
            <h4>How to use ?</h4>
            <h4>How to use ?</h4>
            <h4>How to use ?</h4>
          </div>
          <div className="signup-login">
            {isUser === "yes" ? (
              <Login onFormSwitch={toggle} />
            ) : (
              <Register onFormSwitch={toggle} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
