import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import MenuHeader from "./MenuHeader.jsx";

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
      <div className="text-area">
        <div className="search-area">
          <form
            method="post"
            className="search-sending"
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
          <div className="search-matches">
            <MenuHeader />
            {/* Add search match results here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
