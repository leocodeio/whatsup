// start.jsx
import React, { useContext, useState } from "react";
import whatsup from "../artifacts/whatsup.png";
import Register from "../components/startComponents/Register";
import Login from "../components/startComponents/Login";
import Logout from "../components/startComponents/Logout";
import Text from "./Text";
import { AccountContext } from "../context/AccountDetails";


const Start = () => {
  const [isUser, setIsUser] = useState("yes");
  const toggle = (decision) => {
    setIsUser(decision);
  };

  const {isLogged}=useContext(AccountContext);

  return isLogged==="yes" ? (
    <>
      <Logout/>
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
          <div className="signup-login">
            {isUser === "yes" ? (
              <Login onFormSwitch={toggle}/>
            ) : (
              <Register onFormSwitch={toggle}/>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
