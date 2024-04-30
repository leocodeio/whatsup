// start.jsx
import React, { useState } from "react";
import whatsup from "./artifacts/whatsup.png";
import Register from "./login_signup/Register";
import Login from "./login_signup/Login";
import Logout from "./login_signup/Logout";
import Text from "./login_signup/Text";

const Start = () => {
  const [isUser, setIsUser] = useState("yes");
  const [isLogged, setIsLogged] = useState(localStorage.getItem("isLogged") === "yes");

  const toggle = (decision) => {
    setIsUser(decision);
  };

  const handleLogin = (loggedIn) => {
    setIsLogged(loggedIn);
  };

  return isLogged ? (
    <>
      <Logout setIsLogged={setIsLogged} />
      <Text/>
    </>
  ) : (
    <>
      <header className="start-header">
        <img src={whatsup} alt="Whatsup Logo" className="start-img" />
        <h5 className="start-heading">WHATSUP WEB</h5>
      </header>
      <div className="start-body">
        <div className="start-card">
          <div className="signup-login">
            {isUser === "yes" ? (
              <Login onFormSwitch={toggle} setIsLogged={handleLogin} />
            ) : (
              <Register onFormSwitch={toggle} setIsLogged={handleLogin} />
            )}
          </div>
          <div className="how-to-use">
            <h2>Use WhatsUp</h2>
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
        </div>
      </div>
    </>
  );
};

export default Start;
