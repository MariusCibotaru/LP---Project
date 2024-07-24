import React, { useState } from 'react';
import { Box, ListItemText, Switch, Typography, Slider, IconButton } from '@mui/material';
import { pink } from '@mui/material/colors';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import Fon from '../image/FonSection2_2.png'; 
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Section2_2 = () => {
  const [sliderValue, setSliderValue] = useState(70); 
  const [isSwitchOn, setIsSwitchOn] = useState(true);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSwitchOn(event.target.checked);
    if (!event.target.checked) {
      setSliderValue(0); 
    }
  };

  const lightIntensity = isSwitchOn ? sliderValue / 100 : 0;

  return (
    <Box
      flex={1}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      width={'auto'}
      height={"100%"}
      sx={{ 
        borderRadius: '32px', 
        backgroundImage: `url(${Fon})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center', 
        bgcolor: "#b0b5c0", 
        position: 'relative',
        overflow: 'hidden' 
      }}
    >
      {/* Эффект освещения */}
      <Box
        sx={{
          position: 'absolute',
          top: '40%', 
          left: '27.5%',
          transform: 'translate(-50%, -50%)',
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, rgba(255,255,200,${lightIntensity * 1.5}) 0%, rgba(255,255,200,0) 70%)`,
          pointerEvents: 'none',
          zIndex: 0 
        }}
      />

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        p={2}
        sx={{ zIndex: 1 }} 
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 1
        }}> 
          <Typography variant="h4" sx={{ color: 'black', fontWeight: 'bold' }}>
            Living room
          </Typography>
          <IconButton>
            <KeyboardArrowDownIcon sx={{ color: 'black' }} />
          </IconButton>
        </Box>
        
        <IconButton>
          <InfoOutlinedIcon sx={{ color: 'black' }} />
        </IconButton>
      </Box>

      <Box
        display="flex"
        flexDirection="column" 
        justifyContent="space-between"
        alignItems="center"
        sx={{ 
          bgcolor: "#c0c5d0", 
          borderRadius: '32px',
          width: '100%',
          p: 2,
          zIndex: 1 
         }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          sx={{ mb: 2 }}
        >
          <Box display="flex" alignItems="center">
            <ListItemText 
              primary={
                <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                  Smart Lamp
                </Typography>
              } 
              secondary={<Typography sx={{ color: 'black' }}>3 device</Typography>} 
            />
          </Box>
          <Switch checked={isSwitchOn} onChange={handleSwitchChange} color="default" />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          sx={{
            bgcolor: "#e0e5f0", 
            borderRadius: '16px',
            p: 2,
            mt: 2
          }}
        >
          <BrightnessLowIcon sx={{ color: 'black', mr: 2 }} />
          <Box sx={{ width: '80%', display: 'flex', alignItems: 'center' }}>
            <Slider
              value={sliderValue}
              onChange={handleSliderChange}
              aria-labelledby="continuous-slider"
              disabled={!isSwitchOn} // Disable slider when switch is off
              sx={{
                width: '100%',
                color: pink[600]
              }}
            />
          </Box>
          <Typography sx={{ color: 'black', fontWeight: 'bold', ml: 2, width: '40px', textAlign: 'right' }}>
            {sliderValue}%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Section2_2;
