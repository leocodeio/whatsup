import React from "react";
import Convos from "../components/chatComponents/Convos";
import SendArea from "../components/chatComponents/SendArea";

const Chat = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="h-[350px] w-auto">
          <Convos />
        </div>
        <SendArea/>
      </div>
    </>
  );
};

export default Chat;
