import React, {useState } from "react";
import Convos from "../components/chatComponents/Convos";
import SendArea from "../components/chatComponents/SendArea";
import { IoMdHome } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";


const Chat = () => {
  const navigate=useNavigate();
  const handleClick = () => {
    navigate('/')
  };

  const [text,setText]=useState("");

  return (
    <>
      <button
        className="fixed right-4 top-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        <IoMdHome className="text-3xl text-black" />
      </button>
      <div className="flex flex-col">
        <div className="h-[350px] w-auto">
          <Convos userId={useParams()} text={text} setText={setText}/>
        </div>
        <SendArea userId={useParams()} text={text} setText={setText}/>
      </div>
    </>
  );
};

export default Chat;
