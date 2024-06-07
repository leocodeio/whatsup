import React from "react";
import { useNavigate } from "react-router-dom";

const Connects = (props) => {
  const searchedUsers = props.searchedUsers;
  const navigate = useNavigate();

  const handleClick = (userId) => {
    console.log(`Clicked user with ID: ${userId}`);
    navigate(`/chat/${userId}`);
  };

  return (
    <div className="p-2 m-4 border-solid border-black border-2 rounded-lg">
      {searchedUsers.map((user) => (
        <div
          key={user._id}
          onClick={() => handleClick(user._id)}
          style={{ cursor: "pointer" }}
          className="user-card"
        >
          <p>{user.name}</p>
          <p>{user.tag}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Connects;
