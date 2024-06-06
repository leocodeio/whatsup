import React from "react";

const Connects = (props) => {
  const searchedUser = props.searchedUser;
  // console.log(searchedUser);
  const handleClick = (userId) => {
    console.log(`Clicked user with ID: ${userId}`);
    // You can implement your logic here, such as redirecting to the user's profile page
  };

  return (
    <div className="p-2 m-4 border-solid border-black border-2 rounded-lg">
      <div
        onClick={() => handleClick(searchedUser._id)}
        style={{ cursor: "pointer" }}
      >
        {/* Render user information here */}
        <p>{searchedUser.name}</p>
        <p>{searchedUser.email}</p>
        {/* Add more user details as needed
        <hr /> {/* Line below each user */}
      </div>
    </div>
  );
};

export default Connects;
