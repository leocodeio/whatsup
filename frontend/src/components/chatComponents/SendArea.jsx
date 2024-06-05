import React from "react";
import { IoIosSend } from "react-icons/io";
import Features from "./Features";

const SendArea = () => {
  return (
    <>
      <form
        method="post"
        className="gap-1.5 bg-slate-100 flex items-center justify-between rounded-lg"
      >
        <input
          type="text"
          placeholder="Message..."
          className="pl-3 py-0.5 w-full ml-4 rounded-lg"
        />
        <div className="flex gap-1">
          <button type="submit">
            <IoIosSend style={{ fontSize: "25px", color: "black" }} />
          </button>
          <Features />
        </div>
      </form>
    </>
  );
};

export default SendArea;
