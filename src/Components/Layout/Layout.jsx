import React from "react";
import NavBar from "./NavBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "./ScrollTop";
import Footer from "./Footer";
import Tracker from "../Tracker/Tracker";
import ChartComponent from "../Chart/ChartComponent";

const Layout = (props) => {
  return (
    <>
      <NavBar />
      <Toolbar id="back-to-top-anchor" />

      <Container>
        <Box sx={{ my: 2 }}>
          <ChartComponent />
          <Tracker />
        </Box>
      </Container>
      <Footer />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

export default Layout;
