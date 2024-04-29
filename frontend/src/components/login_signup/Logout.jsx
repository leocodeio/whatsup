import React from 'react';

const Logout = ({ setIsLogged }) => {
  const handleLogout = () => {
    setIsLogged(false); // Update isLogged state in Start component
    localStorage.setItem("isLogged", "no");
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
