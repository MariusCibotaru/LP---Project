import React from 'react';
import { Box, Typography, Switch, ListItemText, IconButton } from '@mui/material';
import Fon from '../image/FonSection2_1.png';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Section2_1 = () => {
  const items = [
    { icon: <ViewInArOutlinedIcon sx={{ color: 'black' }} />, name: 'Area cleaned', value: '75 m²' },
    { icon: <AccessTimeIcon sx={{ color: 'black' }} />, name: 'Cleaning time', value: '30 min' },
    { icon: <BatteryFullIcon sx={{ color: 'black' }} />, name: 'Battery charge', value: '80%' },
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      width={'auto'}
      height={"100%"}
      sx={{ 
        borderRadius: '32px',
        backgroundColor: '#E1E2E5',
        backgroundImage: `url(${Fon})`,
        backgroundSize: '50%', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', 
        position: 'relative',
        zIndex: 1, // Низкий z-index
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        mb={2}
      >
        <Box display="flex" alignItems="center">
          <ListItemText 
            primary={
              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 1
              }}> 
                <Typography variant='h4' sx={{ color: 'black', fontWeight: 'bold' }}>
                  Bedroom
                </Typography>
                <IconButton>
                  <KeyboardArrowDownIcon sx={{ color: 'black' }} />
                </IconButton>
              </Box>
            } 
            secondary={<Typography sx={{ color: 'black' }}>Robot vacuum cleaner</Typography>} 
          />
        </Box>
        <Switch defaultChecked color="default" />
      </Box>
 
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
      >
        {items.map((item, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="30%"
            sx={{
              backgroundColor: '#D3D3D3',
              borderRadius: '32px',
              p: 1,
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                backgroundColor: 'white',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                mr: 2,
                zIndex: 2,
                position: 'relative',
              }}
            >
              {item.icon}
            </Box>
            <ListItemText 
              primary={<Typography sx={{ color: 'black', fontWeight: 'bold' }}>{item.value}</Typography>} 
              secondary={<Typography sx={{ color: 'black' }}>{item.name}</Typography>} 
            />
          </Box>
        ))}
      </Box>

      {/* Additional Box */}
      <Box
        sx={{
          position: 'absolute',
          top: '35%',
          left: '25%',
          transform: 'translate(-50%, -50%)',
          width: '100px',
          height: '100px',
          backgroundColor: 'white',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography sx={{ color: 'black', fontWeight: 'bold' }}>90%</Typography>
        <Typography sx={{ color: 'black' }}>Filter status</Typography>
      </Box>

      {/* Combined Vertical and Horizontal Line */}
      <Box
        sx={{
          position: 'absolute',
          top: 'calc(35% + 50px)',
          left: '25%',
          width: '2px',
          height: '50px',
          backgroundColor: 'white',
          '&:after': {
            content: '""',
            position: 'absolute',
            top: '50px',
            left: '1px',
            width: '70px',
            height: '2px',
            backgroundColor: 'white',
          }
        }}
      />

      {/* Additional Box */}
      <Box
        sx={{
          position: 'absolute',
          top: '65%',
          left: '75%',
          transform: 'translate(-50%, -50%)',
          width: '100px',
          height: '100px',
          backgroundColor: 'white',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
         <Typography sx={{ color: 'black', fontWeight: 'bold' }}>10:00 AM</Typography>
         <Typography sx={{ color: 'black' }}>Next cleaning</Typography>
      </Box>

      {/* Combined Vertical and Horizontal Line */}
      <Box
        sx={{
          position: 'absolute',
          top: 'calc(65% - 100px)',
          left: 'calc(75%)',
          width: '2px',
          height: '50px',
          backgroundColor: 'white',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '-70px',
            width: '70px',
            height: '2px',
            backgroundColor: 'white',
          }
        }}
      />
    </Box>
  );
}

export default Section2_1;
