import React, { useState } from "react";
import Menu from "../components/textComponents/userComponents/Menu";
import MenuHeader from "../components/textComponents/userComponents/MenuHeader";
import Connects from "../components/textComponents/userComponents/Connects";
import Profile from "../components/textComponents/userComponents/Profile";
import Acc from "../components/textComponents/userComponents/Acc";
import { IoMdHome } from "react-icons/io"
// import Chat from "./Chat";

const Text = () => {
  const [isAccOpen, setIsAccOpen] = useState("no");
  const [isProfileOpen, setIsProfileOpen] = useState("no");

  const handleClick = () => {
    setIsAccOpen("no");
    setIsProfileOpen("no");
  };
  return (
    <>
      {isAccOpen === "yes" ? (
        <>
          <button
            className="fixed right-4 top-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClick}
          >
            <IoMdHome className="text-3xl text-black"/>
          </button>
          <Acc />
        </>
      ) : isProfileOpen === "yes" ? (
        <>
          <button
            className="fixed right-4 top-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClick}
          >
            <IoMdHome className="text-3xl text-black"/>
          </button>
          <Profile />
        </>
      ) : (
        <>
          <div className="p-3 mb-4 bg-gradient-to-l from-green-500 flex items-center justify-between border-solid border-black border-2">
            <h1 className="text-xl font-black font-bold">WhatsUp</h1>
            <MenuHeader
              setIsAccOpen={setIsAccOpen}
              setIsProfileOpen={setIsProfileOpen}
            />
          </div>
          <Menu />
          <div className="p-2 m-4 border-solid border-black border-2 rounded-lg">
            <Connects />
            {/* <Chat /> */}
          </div>
        </>
      )}
    </>
  );
};

export default Text;
