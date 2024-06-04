import React from "react";
import { IoIosSend } from "react-icons/io";
import Features from "./Features";
import Convos from "./Convos";

const Chat = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="h-[350px] w-auto"><Convos/></div>
        <form method="post" className="gap-1.5 bg-slate-100 flex items-center justify-between rounded-lg">
          <input type="text" placeholder="Message..." className="pl-3 py-0.5 w-full ml-4 rounded-lg" />
          <div className="flex gap-1">
            <button type="submit">
              <IoIosSend style={{ fontSize: "25px", color: "black" }} />
            </button>
            <Features />
          </div>
        </form>
      </div>
    </>
  );
};

export default Chat;
