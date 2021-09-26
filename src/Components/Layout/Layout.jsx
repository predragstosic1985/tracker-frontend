import React from "react";
import NavBar from "./NavBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "./ScrollTop";
import { StyledFab } from "../../StyledComponents/Button.styled";

const Layout = (props) => {
  // Layout with an action button that can be reused
  const { content } = props;
  const configuration = {
    button: {
      btnBackground: "#0067df",
      fontColor: "#F6F6F6",
      fontFamily: "Roboto",
    },
  };
  return (
    <>
      <NavBar />
      <Toolbar id="back-to-top-anchor" />
      <Grid
        container
        sx={{
          marginTop: "3rem",
          marginLeft: "2rem",
          marginRight: "15rem",
          width: "97vw",
          height: "100vh",
        }}
      >
        {content}
      </Grid>
      <ScrollTop {...props}>
        <StyledFab
          configuration={configuration}
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </StyledFab>
      </ScrollTop>
    </>
  );
};

export default Layout;
