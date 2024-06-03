import React from "react";
import Menu from "../components/textComponents/Menu";
import Chat from "../components/textComponents/Chat";
import MenuHeader from "../components/textComponents/MenuHeader";

const Text = () => {
  return (
    <>
      <div className="flex flex-col">
        <MenuHeader />
        <div className="flex border-solid border-black border-4">
          <Menu />
          <Chat />
        </div>
      </div>
    </>
  );
};

export default Text;
