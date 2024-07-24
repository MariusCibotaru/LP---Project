import React, { useState } from 'react';
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import NavBar from "../navbar/NavBar";
import { lightTheme, darkTheme } from '../utils/theme';
import Notifications from './Notifications';
import Location from './Location';
import Security from './Security';
import Temperature from './Temperature';
import Music from './Music';

const Main = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [isNavBarCollapsed, setIsNavBarCollapsed] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  const toggleNavBar = () => {
    setIsNavBarCollapsed(!isNavBarCollapsed);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Box
          sx={{
            width: isNavBarCollapsed ? 'auto' : '200px',
            position: 'fixed',
            height: '100%',
            transition: 'width 0.3s',
          }}
        >
          <NavBar toggleTheme={toggleTheme} toggleNavBar={toggleNavBar} isNavBarCollapsed={isNavBarCollapsed} />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            marginLeft: isNavBarCollapsed ? 'auto' : '200px',
            transition: 'margin-left 0.3s',
            p: '1%',
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/location" element={<Location />} />
            <Route path="/music" element={<Music />} />
            <Route path="/temperature" element={<Temperature />} />
            <Route path="/security" element={<Security />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Main;
