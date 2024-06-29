import React, { createContext, useState } from "react";

export const AccountContext = createContext(null);

const AccountDetails = ({ children }) => {
  const [Account, setAccount] = useState(null);
  const [isLogged, setIsLogged] = useState('n0'); // Use boolean for isLogged state

  return (
    <AccountContext.Provider
      value={{
        isLogged,
        setIsLogged,
        Account,
        setAccount,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountDetails;
