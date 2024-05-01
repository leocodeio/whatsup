import React from "react";
import { IoIosSend } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const Text = () => {
  return (
    <>
      <div className="text-area">
        <div className="search-area">
          <form method="post" className="search-sending">
            <input type="text" placeholder="#Tag here" />
            <button type="submit"><FaSearch /></button>
          </form>
        </div>
        <div className="chat-area">
          <form method="post" className="message-sending">
            <input type="text" placeholder="message..." />
            <button type="submit"><IoIosSend /></button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Text;
