import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const NavBar = (props) => {
  return (
    <AppBar color="secondary">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: "white",
          }}
        >
          Tracker app
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
