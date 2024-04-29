import React, { useState } from "react";
import whatsup from "./artifacts/whatsup.png";
import Register from "./login_signup/Register";
import Login from "./login_signup/Login";

const Start = () => {
  const [isUser, setisUser] = useState("yes");
  var [isLogged, setisLogged] = useState("yes");

  const toggle = (decision) => {
    setisUser(decision);
  };
  localStorage.setItem("isLogged", "no");
  setisLogged = localStorage.getItem("isLogged");
  console.log(isLogged);
  return isLogged === "yes" ? (
    <>
      <h1 style={{ color: "black" }}>Successfully Logged In!</h1>
    </>
  ) : (
    <>
      <header className="start-header">
        <img src={whatsup} alt="Whatsup Logo" className="start-img" />
        <h5 className="start-heading">WHATSUP WEB</h5>
      </header>
      <div className="start-body">
        <div className="start-card">
          <div className="how-to-use">
            <h2>Use WhatsUp on your computer</h2>
            <br></br>
            <ul className="start-ul">
              <li>
                First login into your account, if you are new here create a new
                account.
              </li>
              <li>
                After logging in search the unique whatsup tag to go texting.
              </li>
              <li>You can see the previous tags that you are texted with.</li>
            </ul>
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
