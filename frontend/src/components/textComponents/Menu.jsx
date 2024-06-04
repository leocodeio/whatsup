import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

const Menu = () => {
  const [searchTag, setSearchTag] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/search-user", {
        searchTag,
      });
      console.log("Response:", response);

      if (response.status === 200) {
        console.log("user found");
      } else {
        console.log("user not found");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
        <form
          method="post"
          className="mb-4 pl-2 pr-4 flex align-center justify-between p-2 m-4 border-solid border-black border-2 rounded-lg"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="#Tag here"
            value={searchTag}
            onChange={(e) => setSearchTag(e.target.value)}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
    </>
  );
};

export default Menu;
