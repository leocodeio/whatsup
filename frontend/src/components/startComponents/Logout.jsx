import React from 'react';

const Logout = ({ setIsLogged }) => {
  const handleLogout = () => {
    setIsLogged(false);
    localStorage.setItem("isLogged", "no");
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
