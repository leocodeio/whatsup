import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import Connects from "./Connects";
import { AccountContext } from "../../context/AccountDetails";
import MenuHeader from "./MenuHeader";

const Menu = (props) => {
  const { Account } = useContext(AccountContext);
  // console.log(Account);
  const [searchTag, setSearchTag] = useState("");
  const [searchedUsers, setSearchedUsers] = useState(Account.connects);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (Account.tag === searchTag) {
      alert("You searched your own tag");
      return;
    }

    const existingUserIndex = searchedUsers.findIndex(
      (user) => user.tag === searchTag
    );
    if (existingUserIndex !== -1) {
      const updatedUsers = [
        searchedUsers[existingUserIndex],
        ...searchedUsers.filter((_, index) => index !== existingUserIndex),
      ];
      setSearchedUsers(updatedUsers);
      alert("User is already in your list, moved to the top");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/search-user", {
        searchTag,
      });

      if (response.status === 200) {
        console.log("User found");
        setSearchedUsers((prevState) => [...prevState, response.data]);
      } else {
        console.log("User not found");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="p-3 mb-4 bg-gradient-to-l from-green-500 flex items-center justify-between border-solid border-black border-2">
        <h1 className="text-xl font-black font-bold">WhatsUp</h1>
        <MenuHeader
          setIsAccOpen={props.setIsAccOpen}
          setIsProfileOpen={props.setIsProfileOpen}
          searchedUsers={searchedUsers}
        />
      </div>
      <form
        method="post"
        className="bg-slate-100 gap-1.5 mb-4 pl-2 pr-4 flex align-center justify-between p-2 m-4 border-solid border-black border-2 rounded-lg"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          placeholder="#Tag here"
          value={searchTag}
          className="rounded-lg pl-2 py-0.5 w-full"
          onChange={(e) => setSearchTag(e.target.value)}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>

      <Connects searchedUsers={searchedUsers}/>
    </>
  );
};

export default Menu;
