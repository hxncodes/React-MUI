import styled from "@emotion/styled";
import { Pets, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Badge,
  InputBase,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";

// Custom components
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  width: "40%",
  borderRadius: "4px",
  // borderRadius: theme.shape.borderRadius,
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: { display: "flex" },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: { display: "none" },
}));

const Navbar = () => {
  // Hook
  const [open, setOpen] = useState(false);

  // Functions
  const handleClose = () => setOpen(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          hxnCodes
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={5} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={7} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="../assets/images/hxncodes.jpeg"
            onClick={() => setOpen(true)}
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="../../assets/images/hxncodes.jpeg"
            onClick={() => setOpen(true)}
          />
          <Typography variant="span">Wahaj</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        open={open}
        onClose={handleClose}
        anchorOrigin={{ verticle: "top", horizontal: "right" }}
        transformOrigin={{ verticle: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My Account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
