"use client"
import React from 'react';
import { Provider } from 'react-redux';
import makeStore from '@/lib/store/store';
import About from '@/app/Component/About';
import Contact from '@/app/Component/Contact';
import Introduction from '@/app/Component/Introduction';
import Project from '@/app/Component/Project';
import Navbar from '@/app/Navbar';
import { useAppSelector } from '@/lib/store/hook';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => {
  const black = {
    main: "#000000",
  };

  const white = {
    main: "#FFFFFF",
  };

  const grey = {
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  };

  return {
    palette: {
      mode,
      ...(mode === "light"
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
            divider: "#fff",
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


const Home=()=> {
  const mode = useAppSelector((state) => state.themeOptions.mode);
  console.log("page mode",mode);
  const theme = createTheme(getDesignTokens(mode));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className="flex min-h-screen flex-col">
        <div className="font-mono text-sm">
          <Navbar />
          <Introduction />
          <About />
          <Project />
          <Contact />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default function App() {
const store = makeStore();

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
