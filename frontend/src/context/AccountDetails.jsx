import React, { createContext, useState } from "react";

export const AccountContext = createContext(null);

const AccountDetails = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [isLogged, setIsLogged] = useState("no");

  return (
    <AccountContext.Provider
      value={{
        isLogged,
        setIsLogged,
        account,
        setAccount,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountDetails;
