import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../context/AccountDetails";
import Render from "./Render.jsx";
const Convos = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const { Account } = useContext(AccountContext);

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:3001/conversations/chat/${userId.id}`,
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
      console.log(messages);
      setLoading(false);
    };

    fetchMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div>{loading ? <p>Loading...</p> : <Render messages={messages} />}</div>
  );
};

export default Convos;
