import React, { useContext } from "react";
import { AccountContext } from "../../context/AccountDetails";

const Profile = () => {
  const { Account } = useContext(AccountContext);
  return (
    <div className="w-md mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <table className="w-full table-auto">
        <tbody>
          <tr>
            <td className="px-4 py-2 text-gray-600">Name</td>
            <td className="px-4 py-2">{Account.name}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-gray-600">Tag</td>
            <td className="px-4 py-2">{Account.tag}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
