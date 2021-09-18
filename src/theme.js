import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// colors
const primary = "#4285F4";
// const primary = "#b3294e"; tamna crvena
const secondary = "#73c2fb";
const black = "#343a40";
const darkBlack = "rgb(36, 40, 44)";
const background = "#f5f5f5";
const warningLight = "#fdc745";
const warningMain = "#fdc845";
const warningDark = "#fdc945";

// breakpoints
const xl = 1920;
const lg = 1280;
const md = 960;
const sm = 600;
const xs = 0;

const theme = createTheme({
  palette: {
    primary: { main: primary },
    secondary: { main: secondary },
    common: {
      black,
      darkBlack,
    },
    warning: {
      light: warningLight,
      main: warningMain,
      dark: warningDark,
    },
  },
  breakpoints: {
    // Define custom breakpoint values.
    // media queries for these breakpoints
    values: {
      xl,
      lg,
      md,
      sm,
      xs,
    },
  },
  background: {
    default: background,
  },
});

export default responsiveFontSizes(theme);
