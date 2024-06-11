import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../context/AccountDetails";

const Convos = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  const { Account } = useContext(AccountContext);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/chat/${userId.id}`,
          {
            params: {
              senderId: Account._id,
            },
          }
        );
        setMessages(response.data);
      } catch (err) {
        console.log("error while fetching convo", err);
      }
    };

    fetchMessages();
  }, [userId.id,messages, Account._id]);

  return (
    <div>
      {messages.length > 0 ? (
        messages.map((message, index) => (
          <div key={index}>
            <p>{message.text}</p>
            <small>{message.senderId}</small>
          </div>
        ))
      ) : (
        <p>No messages yet</p>
      )}
    </div>
  );
};

export default Convos;
