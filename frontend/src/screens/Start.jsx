import React, { useContext, useState } from "react";
import whatsup from "../artifacts/whatsup.png";
import Register from "../components/startComponents/Register";
import Login from "../components/startComponents/Login";
import Text from "./Text";
import { AccountContext } from "../context/AccountDetails";

const Start = () => {
  const [isUser, setIsUser] = useState("yes");
  const toggle = (decision) => {
    setIsUser(decision);
  };

  const {isLogged } = useContext(AccountContext);
  return isLogged === "yes" ? (
    <>
      <Text />
    </>
  ) : (
    <>
    <div className="h-svh w-svw">
      <header className="bg-green-600 flex p-5 h-32 w-full justify-center items-center">
        <img src={whatsup} alt="Whatsup Logo" className="h-10 w-10" />
        <h5 className="text-sm font-semibold text-white ml-2">WHATSUP WEB</h5>
      </header>
      <div className="flex flex-col h-auto w-11/12 bg-white p-10 rounded drop-shadow-2xl mx-auto my-10 text-black gap-10 md:w-3/4">
        <div className="flex items-center justify-center flex-col gap-5">
          {isUser === "yes" ? (
            <Login onFormSwitch={toggle} />
          ) : (
            <Register onFormSwitch={toggle} />
          )}
        </div>
        <div className="how-to-use">
          <h2 className="font-light text-2l text-center md:text-left">Use WhatsUp</h2>
          <ul className="list-none p-0 mt-5 text-left font-normal text-lg">
            <li className="relative py-2.5 before:text-black before:font-bold before:absolute before:left-0 before:top-[20%] before:pr-2">
              -First login into your account, if you are new here create a new account.
            </li>
            <li className="relative py-2.5 before:text-black before:font-bold before:absolute before:left-0 before:top-[20%] before:pr-2">
              -After logging in search the unique whatsup tag to go texting.
            </li>
            <li className="relative py-2.5 before:text-black before:font-bold before:absolute before:left-0 before:top-[20%] before:pr-2">
              -You can see the previous tags that you are texted with.
            </li>
          </ul>
        </div>
      </div>
      </div>
    </>
  );
};

export default Start;
