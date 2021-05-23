import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./Components/App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
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
    //  [
    //   "Oxanium, cursive",
    //   "-apple-system",
    //   "BlinkMacSystemFont",
    //   '"Segoe UI"',
    //   "Roboto",
    //   '"Helvetica Neue"',
    //   "Arial",
    //   "sans-serif",
    //   '"Apple Color Emoji"',
    //   '"Segoe UI Emoji"',
    //   '"Segoe UI Symbol"',
    // ].join(","),
  },
});

theme.typography.h5 = {
  fontSize: "1.2rem",
  "@media (max-width:1920px)": {
    fontSize: "1.1rem",
    fontWeight: "500",
  },
  // [theme.breakpoints.up('md')]: {
  //   fontSize: '2.4rem',
  // },
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
