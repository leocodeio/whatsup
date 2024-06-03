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

  const { isLogged } = useContext(AccountContext);

  return isLogged === "yes"? (
    <>
      <Text />
    </>
  ) : (
    <>
      <header className="bg-green-600 flex gap-2.5 p-5 pl-36 h-44 relative">
        <img src={whatsup} alt="Whatsup Logo" className="mt-2.5 h-10 w-10" />
        <h5 className="text-sm font-semibold text-white">WHATSUP WEB</h5>
      </header>
      <div className="flex">
        <div className="h-4/5 w-3/4 bg-white p-10 rounded shadow-lg absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-black flex flex-row justify-around gap-7.5">
          <div className="how-to-use">
            <h2 className="font-light text-2xl">Use WhatsUp</h2>
            <br />
            <ul className="list-none p-0 m-5 text-left font-normal text-lg">
              <li className="relative py-2.5 before:content-['-'] before:text-black before:font-bold before:absolute before:left-[-1em] before:top-[20%]">
                First login into your account, if you are new here create a new account.
              </li>
              <li className="relative py-2.5 before:content-['-'] before:text-black before:font-bold before:absolute before:left-[-1em] before:top-[20%]">
                After logging in search the unique whatsup tag to go texting.
              </li>
              <li className="relative py-2.5 before:content-['-'] before:text-black before:font-bold before:absolute before:left-[-1em] before:top-[20%]">
                You can see the previous tags that you are texted with.
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-between flex-col gap-5 mt-20">
            {isUser === "yes"? (
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