import React from "react";
import { IoIosSend } from "react-icons/io";

const Chat = () => {
  return (
    <>
      <form method="post" className="flex items-center justify-between">
        <input type="text" placeholder="Message..." />
        <button type="submit">
          <IoIosSend style={{fontSize: '25px', color:'black'}}/>
        </button>
      </form>
    </>
  );
};

export default Chat;
