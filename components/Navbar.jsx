import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">hxnCodes</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
