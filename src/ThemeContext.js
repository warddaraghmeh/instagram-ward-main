import React, { createContext, useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#000000",
    },
    primary: {
      main: "#f5f2f0",
    },
  },
  overrides: {
    MuiCard: {
      root: {
        backgroundColor: "#333",
      },
    },
  },
});

 
const ThemeContext = createContext(theme);
 
export function useTheme() {
  return useContext(ThemeContext);
}

 export function ThemeProviderWrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </ThemeProvider>
  );
}
