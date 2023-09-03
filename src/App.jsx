import { Header } from "./composite";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { themes } from "./constants/theme";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: "#1f6eeb",
    },

    background: {
      ...(mode === themes.LIGHT
        ? { primary: "#ffffff", border: "#d0d7de", secondary: "#f6f8fa" }
        : {
            primary: "#02040a",
            secondary: "#0d1116",
            border: "#30363d",
          }),
    },

    text: {
      ...(mode === themes.LIGHT
        ? {
            primary: "#1f2329",
            secondary: "#656d76",
          }
        : { primary: "#e6edf3", secondary: "#7d8590" }),
    },
    border: {},
  },
});

const App = () => {
  const [theme, setTheme] = useState(themes.LIGHT);

  return (
    <ThemeProvider theme={createTheme(getDesignTokens(theme))}>
      <Header changeThemeHandler={setTheme} currentTheme={theme} />
    </ThemeProvider>
  );
};

export default App;
