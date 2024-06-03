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
      <div className="h-90 w-80">
        <form
          method="post"
          className="flex border-black border-solid border-4"
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
      </div>
    </>
  );
};

export default Menu;
