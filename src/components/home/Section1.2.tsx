import React, { useState } from 'react';
import { Box, Typography, Divider, IconButton, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddIcon from '@mui/icons-material/Add';
import BedroomParentOutlinedIcon from '@mui/icons-material/BedroomParentOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import WeekendOutlinedIcon from '@mui/icons-material/WeekendOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Section1_2 = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const items = [
    { icon: <BedroomParentOutlinedIcon sx={{ color: 'black' }} />, name: 'Bedroom', devices: 3 },
    { icon: <KitchenOutlinedIcon sx={{ color: 'black' }} />, name: 'Kitchen', devices: 4 },
    { icon: <WeekendOutlinedIcon sx={{ color: 'black' }} />, name: 'Living Room', devices: 5 },
    { icon: <BathtubOutlinedIcon sx={{ color: 'black' }} />, name: 'Bathroom', devices: 2 },
    { icon: <WeekendOutlinedIcon sx={{ color: 'black' }} />, name: 'Living Room', devices: 5 },
    { icon: <KitchenOutlinedIcon sx={{ color: 'black' }} />, name: 'Kitchen', devices: 4 },
    { icon: <BedroomParentOutlinedIcon sx={{ color: 'black' }} />, name: 'Bedroom', devices: 3 },

  ];

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      width={'auto'}
      height={"100%"}
      sx={{
        borderRadius: '32px',
        backgroundImage: 'linear-gradient(to top, #eef2f3, #8e9eab)',
      }}
    >
      <Box width="100%">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          mb={1}
        >
          <Typography variant="h4" sx={{ color: 'black', fontWeight: 'bold' }}>Rooms</Typography>
          <IconButton>
            <InfoOutlinedIcon sx={{ color: 'black' }} />
          </IconButton>
        </Box>
        <Divider sx={{ bgcolor: 'black' }} />
      </Box>
 
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        width="100%"
        flexGrow={1}
        sx={{ overflow: 'auto', height: 0,
          '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#b0b0b0',
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#f0f0f0',
            },
         }} 
      >
        <List sx={{ width: '100%', flexGrow: 1 }}>
          {items.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: selectedIndex === index ? 'white' : 'transparent',
                borderRadius: '32px',
                transition: 'background-color 0.3s',
                mb: 1,
                cursor: 'pointer',
                position: 'relative',
              }}
              onClick={() => handleListItemClick(index)}
            >
              <Box display="flex" alignItems="center">
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    backgroundColor: '#E0E0E0',
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
                  primary={<Typography sx={{ color: 'black', fontWeight: 'bold' }}>{item.name}</Typography>} 
                  secondary={<Typography sx={{ color: 'black' }}>{`${item.devices} devices`}</Typography>} 
                />
              </Box>
              <ArrowForwardIosOutlinedIcon sx={{ color: selectedIndex === index ? 'black' : '#7d7d7d' }} />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        sx={{
          mt: 2,
        }}
      >
        <Button
          startIcon={<AddIcon sx={{ fontSize: '32px', color: 'white' }} />} 
          sx={{
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '32px',
            p: 2,
            width: '100%', 
            height: '56px', 
            fontSize: '1.1rem', 
            fontWeight: 'bold', 
            '&:hover': {
              backgroundColor: 'black',
            },
          }}
        >
          ADD ROOM
        </Button>
      </Box>

    </Box>
  );
}

export default Section1_2;
