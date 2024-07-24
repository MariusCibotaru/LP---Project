import React from 'react';
import { Box, Typography } from '@mui/material';
import Fon from '../image/FonSection1_1.jpg';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import PowerIcon from '@mui/icons-material/Power';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';

const Section1_1 = () => {
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
        backgroundImage: `url(${Fon})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        mt={2}
        px={2}
      >
        <Box
          display="flex"
          alignItems="center"
          sx={{
            backgroundColor: '#fff',
            borderRadius: '36px',
            p: 2,
            m: 1,
            paddingX: 4
          }}
        >
          <FiberManualRecordIcon sx={{ color: 'red' }} />
          <Typography variant="h5" ml={1} sx={{ color: 'black',  fontWeight: 'bold' }}>Live</Typography>
        </Box>
        
        <Box
          display="flex"
          justifyContent="end"
          alignItems="center"
          width="100%"
        >
          <Box
            display="flex"
            alignItems="center"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '36px',
              p: 2,
              m: 1,
              paddingX: 4
            }}
          >
            <ThermostatIcon sx={{ color: 'black' }} />
            <Typography variant="body1" ml={1} sx={{ color: 'black' }}>24°C</Typography>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '36px',
              p: 2,
              m: 1,
              paddingX: 4
            }}
          >
            <OpacityIcon sx={{ color: 'black' }} />
            <Typography variant="body1" ml={1} sx={{ color: 'black' }}>50%</Typography>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '36px',
              p: 2,
              m: 1,
              paddingX: 4
            }}
          >
            <PowerIcon sx={{ color: 'black' }} />
            <Typography variant="body1" ml={1} sx={{ color: 'black' }}>350W</Typography>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '36px',
              p: 2,
              m: 1,
              paddingX: 4
            }}
          >
            <BatteryFullIcon sx={{ color: 'black' }} />
            <Typography variant="body1" ml={1} sx={{ color: 'black' }}>80%</Typography>
          </Box>
        </Box>

      </Box>
    </Box>
  );
}

export default Section1_1;
