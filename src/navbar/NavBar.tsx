import React, { useState } from 'react';
import { Box, IconButton, Avatar } from '@mui/material';
import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined';
import Brightness3OutlinedIcon from '@mui/icons-material/Brightness3Outlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import SecurityIcon from '@mui/icons-material/Security';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate, useLocation } from 'react-router-dom';
import LogoWhite from '../components/image/LogoWhite.png';
import LogoDark from '../components/image/LogoDark.png';
import AvatatNavBar from '../components/image/AvatarNav.jpg'

interface NavBarProps {
  toggleTheme: () => void;
  toggleNavBar: () => void;
  isNavBarCollapsed: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ toggleTheme, toggleNavBar, isNavBarCollapsed }) => {
  const [theme, setTheme] = useState('Light');
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === 'Light' ? 'Dark' : 'Light'));
    toggleTheme();
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const iconColor = theme === 'Light' ? 'black' : 'white';
  const iconSelectedColor = theme === 'Light' ? 'black' : 'white';
  const iconDefaultColor = theme === 'Light' ? '#7d7d7d' : '#b3b3b3'; 
  const selectedBgColor = theme === 'Light' ? '#f0f0f0' : '#333'; 
  const bgcolor = theme === 'Light' ? '#c2c2c2' : '#d3d3d3';
  const iconSize = 25;


  const getIconColor = (path: string) => (location.pathname === path ? iconSelectedColor : iconDefaultColor);

  const renderIconButton = (path: string, IconComponent: React.ElementType) => (
    <Box
      sx={{
        borderRadius: '8px',
        bgcolor: location.pathname === path ? selectedBgColor : 'transparent',
        p: 1,
        transition: 'background-color 0.3s',
      }}
    >
      <IconButton sx={{ color: getIconColor(path) }} onClick={() => handleNavigation(path)}>
        <IconComponent sx={{ fontSize: iconSize }} />
      </IconButton>
    </Box>
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      width={isNavBarCollapsed ? '50px' : '200px'}
      sx={{ transition: 'width 0.3s', position: 'absolute', zIndex: 9999 }} 
    >
      <Box 
        display="flex" 
        alignItems="center" 
        justifyContent="center" 
        height="30px" 
        width="20px"
        bgcolor= {bgcolor}
        onClick={toggleNavBar}
        sx={{
          position: 'absolute',
          top: '50%',
          right: isNavBarCollapsed ? '50%' : '0px',
          transform: 'translate(50%, -50%)',
          borderRadius: '0 50% 50% 0',
          cursor: 'pointer',
          transition: 'right 0.3s, background-color 0.3s, height 0.3s',
          zIndex: 9999
        }}
      >
        {isNavBarCollapsed ? <ChevronRightIcon sx={{ color: 'black' }} /> : <ChevronLeftIcon sx={{ color: 'black' }} />}
      </Box>
      {!isNavBarCollapsed ? (
        <>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={1}
            sx={{ transition: 'background-color 0.3s', position: 'relative', cursor: 'pointer' }}
            onClick={() => handleNavigation('/')}
          >
            <img src={theme === 'Light' ? LogoWhite : LogoDark} alt="Logo" style={{ maxHeight: '100px' }} />
          </Box>
          <Box
            flex={3}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={2}
            sx={{ transition: 'background-color 0.3s' }}
          >
            {renderIconButton('/', DashboardIcon)}
            {renderIconButton('/location', LocationOnIcon)}
            {renderIconButton('/music', MusicNoteIcon)}
            {renderIconButton('/temperature', ThermostatIcon)}
            {renderIconButton('/security', SecurityIcon)}
            {renderIconButton('/notifications', NotificationsIcon)}
          </Box>
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={2}
            sx={{ transition: 'background-color 0.3s' }}
          >
            <IconButton onClick={handleToggle} sx={{ color: iconColor }}>
              {theme === 'Light' ? <Brightness3OutlinedIcon sx={{ fontSize: iconSize }} /> : <Brightness7OutlinedIcon sx={{ fontSize: iconSize }} />}
            </IconButton>
            <IconButton sx={{ color: iconColor }}>
              <SettingsIcon sx={{ fontSize: iconSize }} />
            </IconButton>
            <Avatar alt="User Avatar" src={AvatatNavBar} />
          </Box>
        </>
      ) : null}
    </Box>
  );
};

export default NavBar;
