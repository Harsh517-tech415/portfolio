"use client"
import { Box, FormControlLabel, Stack } from "@mui/material";
import Navbar from "./Navbar";
import Introduction from "./Component/Introduction";
import About from "./Component/About";
import Project from "./Component/Project";
import { createContext, useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
export const ColorModeContext = createContext();

const getDesignTokens = (mode) => {
  const black = {
    main: '#000000',
  };

  const white = {
    main: '#FFFFFF',
  };

  const grey = {
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  };

  return {
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: black,
            divider: grey[400],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            primary: white,
            divider: '#fff',
            background: {
              default: grey[900],
              paper: grey[800],
            },
            text: {
              primary: white.main,
              secondary: white.main,
            },
          }),
    },
  };
};




export default function Home() {
  const [mode, setMode] = useState('light');
  
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = createTheme(getDesignTokens(mode));

  return (
    <ColorModeContext.Provider value={{ toggleColorMode:toggleColorMode,mode:mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className="flex min-h-screen flex-col">
          <div className="font-mono text-sm">
            <Navbar />

            <Introduction />
            <About />
            <Project />
          </div>
        </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
