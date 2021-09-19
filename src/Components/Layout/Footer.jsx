import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

const Footer = (props) => {
  return (
    <AppBar color="default" position="fixed" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        Predrag Stosic Sep, 2021
      </Toolbar>
    </AppBar>
  );
};
export default Footer;
