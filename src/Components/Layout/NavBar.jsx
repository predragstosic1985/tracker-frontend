import React, { useContext } from "react";
import Toolbar from "@mui/material/Toolbar";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useHistory } from "react-router-dom";
import { CustomHeader } from "../../StyledComponents/AppBar.styled";
import { StyledIconButton } from "../../StyledComponents/Button.styled";
import { StyledTypography } from "../../StyledComponents/Typography.styled";
import { AuthContext } from "../Auth/AuthContext";

const NavBar = (props) => {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();
  const configuration = {
    mainBackground: "#b51783",
    button: {
      btnBackground: "#0067df",
      fontColor: "#F6F6F6",
      fontFamily: "Roboto",
    },
    typography: {
      fontColor: "#F6F6F6",
      fontFamily: "Roboto",
    },
    header: {
      background: "#009fdf",
      fontColor: "#F6F6F6",
      fontFamily: "Roboto",
    },
  };

  const logutUser = () => {
    history.push("/");
    dispatch({
      type: "del",
    });
  };

  return (
    <CustomHeader configuration={configuration}>
      <Toolbar>
        <StyledTypography
          configuration={configuration}
          variant="h6"
          sx={{ flexGrow: 1, marginLeft: "1rem" }}
        >
          Tracker
        </StyledTypography>
        <StyledIconButton
          configuration={configuration}
          onClick={logutUser}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <PowerSettingsNewIcon />
        </StyledIconButton>
      </Toolbar>
    </CustomHeader>
  );
};
export default NavBar;
