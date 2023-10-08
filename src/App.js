import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./components/Explore";
import HomePage from "./components/HomePage";
import { Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
const darkTheme = createTheme({
  palette: {
    background: {
      default: "#000000",
      paper: "#000000",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <Router>
      <Grid container spacing={0}>
        <Grid item xs={1} sm={4} >
          <ResponsiveDrawer />
        </Grid>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </Grid>
    </Router>
    </ThemeProvider>
  );
}

export default App;
