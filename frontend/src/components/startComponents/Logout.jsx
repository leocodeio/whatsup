import React, { useContext } from 'react';
import { AccountContext } from '../../context/AccountDetails';

const Logout = () => {
  const {setIsLogged} = useContext(AccountContext);

  const handleLogout = () => {
    // setIsLogged(false);
    // localStorage.setItem("isLogged", "no");
    setIsLogged("no");
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
