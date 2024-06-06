import React, { useState } from "react";
import Menu from "../components/textComponents/userComponents/Menu";
import MenuHeader from "../components/textComponents/userComponents/MenuHeader";
import Connects from "../components/textComponents/userComponents/Connects";
import Profile from "../components/textComponents/userComponents/Profile";
import Acc from "../components/textComponents/userComponents/Acc";
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
          <Acc />
          <button onClick={handleClick}>home</button>
        </>
      ) : isProfileOpen === "yes" ? (
        <>
          <Profile />
          <button onClick={handleClick}>home</button>
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
