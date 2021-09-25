import React from "react";
import AppRouter from "./Components/AppRouter/AppRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const App = () => {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={DateAdapter}>
        <AppRouter />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
