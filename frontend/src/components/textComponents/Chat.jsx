import React from "react";
import { IoIosSend } from "react-icons/io";

const Chat = () => {
  return (
    <>
      <div className="chat-area">
        <form method="post" className="message-sending">
          <input type="text" placeholder="message..." />
          <button type="submit">
            <IoIosSend />
          </button>
        </form>
      </div>
    </>
  );
};

export default Chat;
