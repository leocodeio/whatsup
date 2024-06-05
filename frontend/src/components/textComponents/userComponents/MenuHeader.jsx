import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AccountContext } from "../../../context/AccountDetails";
import { useContext } from "react";
import { IoPerson } from "react-icons/io5";
import { useState } from "react";


export default function MenuHeader(props) {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const { setIsLogged } = useContext(AccountContext);
  const handleLogout = () => {
    setIsLogged("no");
    setAnchorEl(null);
  };

  const handleMyAccount = () => {
    props.setIsAccOpen("yes")
    setAnchorEl(null);
  };

  const handleProfile = () => {
    props.setIsProfileOpen("yes")
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <IoPerson style={{ fontSize: "30px", color: "black" }} />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
        <MenuItem onClick={handleMyAccount}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
}
