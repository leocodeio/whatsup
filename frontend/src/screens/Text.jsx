import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import axios from 'axios';

const Text = () => {
  const [searchTag, setSearchTag] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3001/search-user', { searchTag });
      console.log('Response:', response);
  
      if (response.status === 200) {
        console.log('user found');
      } else {
        console.log('user not found');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="text-area">
        <div className="search-area">
          <form method="post" className="search-sending" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="#Tag here"
              value={searchTag}
              onChange={(e) => setSearchTag(e.target.value)}
            />
            <button type="submit"><FaSearch /></button>
          </form>
          <div className="search-matches">

          </div>
        </div>
        <div className="chat-area">
          <form method="post" className="message-sending">
            <input type="text" placeholder="message..." />
            <button type="submit"><IoIosSend /></button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Text;
