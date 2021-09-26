import React from "react";
import AppRouter from "./Components/AppRouter/AppRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { AuthContextProvider } from "./Components/Auth/AuthContext";

const App = () => {
  const theme = createTheme();
  console.log("test");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={DateAdapter}>
        <AuthContextProvider>
          <AppRouter />
        </AuthContextProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
