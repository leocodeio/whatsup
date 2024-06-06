import React, { useContext } from 'react';
import { AccountContext } from "../../../context/AccountDetails";

const Acc = () => {
  const { Account } = useContext(AccountContext);

  // Function to render table rows from account data
  const renderRows = () => {
    return (
      <>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">Name</td>
          <td className="px-6 py-4">{Account.name}</td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">Email</td>
          <td className="px-6 py-4">{Account.email}</td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">Password</td>
          <td className="px-6 py-4">{Account.password}</td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">Tag</td>
          <td className="px-6 py-4">{Account.tag}</td>
        </tr>
      </>
    );
  };

  return (
    <div className="max-w-md mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">This is the Account Page</h1>
      <table className="w-full table-auto border-collapse">
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </div>
  );
};

export default Acc;