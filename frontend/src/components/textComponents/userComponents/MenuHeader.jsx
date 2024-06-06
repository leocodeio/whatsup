import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AccountContext } from "../../../context/AccountDetails";
import { useContext, useState } from "react";
import { IoPerson } from "react-icons/io5";

export default function MenuHeader(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isBackdropVisible, setIsBackdropVisible] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsBackdropVisible(true);
  };

  const { setIsLogged } = useContext(AccountContext);
  const handleLogout = () => {
    setIsLogged("no");
    handleClose();
  };

  const handleMyAccount = () => {
    props.setIsAccOpen("yes");
    handleClose();
  };

  const handleProfile = () => {
    props.setIsProfileOpen("yes");
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsBackdropVisible(false);
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
        <IoPerson className="text-3xl text-black" />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        slotProps={{
          paper: {
            style: {
              border: "2px solid black",
            },
          },
        }}
      >
        <MenuItem
          className="w-full text-left px-4 py-2 hover:bg-gray-200"
          onClick={handleProfile}
        >
          Profile
        </MenuItem>
        <MenuItem
          className="w-full text-left px-4 py-2 hover:bg-gray-200"
          onClick={handleMyAccount}
        >
          My account
        </MenuItem>
        <MenuItem
          className="w-full text-left px-4 py-2 hover:bg-gray-200"
          onClick={handleLogout}
        >
          Logout
        </MenuItem>
      </Menu>
      {isBackdropVisible && (
        <div
          className="fixed inset-0 bg-black opacity-25"
          onClick={handleClose}
        ></div>
      )}
    </>
  );
}
