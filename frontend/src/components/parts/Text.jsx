import React from "react";

const Text = () => {
  return (
    <>
      <div className="text-area">
        <div className="search-area">
          <form method="post">
            <input type="text" placeholder="#Tag here" />
            <button type="submit">search</button>
          </form>
        </div>
        <div className="chat-area">here chatting will be done</div>
      </div>
    </>
  );
};

export default Text;
