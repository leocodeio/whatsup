import React, { useContext } from 'react'
import { AccountContext } from "../../../context/AccountDetails";

const Acc = () => {
  const { Account } = useContext(AccountContext);
  console.log(Account);
  return (
    <>
      <h1>this is {JSON.stringify(Account)}</h1>
    </>
  )
}

export default Acc
