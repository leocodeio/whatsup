import React from "react";

const RenderArea = ({ messages }) => {
  console.log(messages[1]);
  return (
    <>
      {messages.length > 0 ? (
        messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))
      ) : (
        <p>No messages yet</p>
      )}
      <br/>
      <br/>
      <br/>
    </>
  );
};

export default RenderArea;
