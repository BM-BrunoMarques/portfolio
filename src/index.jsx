import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./Components/App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: "Oxanium, cursive",
  },
});

theme.typography.h5 = {
  fontSize: "1.7rem",
  "@media (max-width:1920px)": {
    fontSize: "1.4rem",
    fontWeight: "500",
  },

};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
