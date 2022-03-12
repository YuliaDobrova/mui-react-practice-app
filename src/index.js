import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material";

import "./index.css";
import App from "./components/App";

const myTheme = createTheme({
  palette: {
    primary: {
      //   main: "#007FFF",
      main: "#61dafb",
    },
    secondary: {
      //   main: "#9c27b0",
      main: "#61da",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
