import React from "react";
import Menu from "../components/textComponents/Menu";
import Chat from "../components/textComponents/Chat";
import MenuHeader from "../components/textComponents/MenuHeader";

const Text = () => {
  return (
    <>
      <div className="p-3 mb-4 bg-gradient-to-l from-green-500 flex items-center justify-between border-solid border-black border-2">
        <h1 className="text-xl font-black font-bold">WhatsUp</h1>
        <MenuHeader />
      </div>
        <Menu />
      <div className="p-2 m-4 border-solid border-black border-2 rounded-lg">
        <Chat />
      </div>
    </>
  );
};

export default Text;
