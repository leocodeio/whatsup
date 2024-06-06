import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import Connects from "./Connects";

const Menu = () => {
  const [searchTag, setSearchTag] = useState("");
  const [searchedUser,setSearchedUser]=useState({
    _id: '665c3dc02e52ea1e33526870',        
  
    name: 'asdssda',
    email: 'ssasda@s.cds',    
  
    password: 'asdsa@sda.xc', 
  
    tag: 'whatstag1',
    __v: 0
  });

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/search-user", {
        searchTag,
      });
      // console.log("Response:", response);

      if (response.status === 200) {
        console.log("user found");
        setSearchedUser(response.data);
      } else {
        console.log("user not found");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(()=>{
    console.log(searchedUser.data);
  },[searchedUser])

  return (
    <>
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

        <Connects searchedUser={searchedUser}/>
    </>
  );
};

export default Menu;
