import React, { useState, useEffect, useRef } from 'react';
import { Box, ListItemText, Switch, Typography, IconButton, Avatar, Slider } from '@mui/material';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SurroundSoundOutlinedIcon from '@mui/icons-material/SurroundSoundOutlined';
import AvatarFon from '../image/Avater.jpeg';
import Fon from '../image/FonSection2_2.png'

const Section2_3 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [sliderValue, setSliderValue] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handlePlayPauseClick = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSwitchOn(event.target.checked);
    if (!event.target.checked) {
      setIsPlaying(false);
      clearInterval(intervalRef.current as NodeJS.Timeout);
      setSliderValue(0);
    }
  };

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  const formatTime = (value: number) => {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  useEffect(() => {
    if (isPlaying && isSwitchOn) {
      intervalRef.current = setInterval(() => {
        setSliderValue((prev) => {
          if (prev >= 180) {
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current as NodeJS.Timeout);
    }

    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, [isPlaying, isSwitchOn]);

  return (
    <Box
      flex={1}
      bgcolor="#e5e7ea"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      width={'auto'}
      height={"100%"}
      sx={{ borderRadius: '32px' }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        sx={{ my: 1 }}
      >
        <Box display="flex" alignItems="center">
          <ListItemText
            primary={
              <Typography variant='h4' sx={{ color: 'black', fontWeight: 'bold' }}>
                Speakers
              </Typography>
            }
            secondary={
              <Typography variant='h6' sx={{ color: 'black' }}>
                {isSwitchOn && isPlaying ? 'Playing' : 'Stopped'}
              </Typography>
            }
          />
        </Box>
        <Switch checked={isSwitchOn} onChange={handleSwitchChange} color="default" />
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        flexGrow={1}
        position="relative"
      >
        <Avatar
          alt="Speaker Avatar" 
          src={AvatarFon}
          sx={{ width: 200, height: 200 }}
        />
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        sx={{
          my: 2,
        }}
      >
        <Typography sx={{ color: 'black', mr: 2 }}>{formatTime(sliderValue)}</Typography>
        <Slider
          value={sliderValue}
          onChange={handleSliderChange}
          aria-labelledby="continuous-slider"
          min={0}
          max={180}
          sx={{ color: 'grey', width: '70%' }}
        />
        <Typography sx={{ color: 'black', ml: 2 }}>3:00</Typography>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        width="100%"
        sx={{
          my: 2,
        }}
      >
        <IconButton disabled={!isSwitchOn}>
          <ShuffleIcon sx={{ color: 'black', fontSize: 25 }} />
        </IconButton>
        <IconButton disabled={!isSwitchOn}>
          <SkipPreviousIcon sx={{ color: 'black', fontSize: 25 }} />
        </IconButton>
        <IconButton
          onClick={handlePlayPauseClick}
          sx={{ bgcolor: isSwitchOn ? '#c0c5d0' : 'gray', borderRadius: '50%', p: 1 }}
          disabled={!isSwitchOn}
        >
          {isSwitchOn && isPlaying ? (
            <PauseIcon sx={{ color: 'black', fontSize: 25 }} />
          ) : (
            <PlayArrowIcon sx={{ color: 'black', fontSize: 25 }} />
          )}
        </IconButton>
        <IconButton disabled={!isSwitchOn}>
          <SkipNextIcon sx={{ color: 'black', fontSize: 25 }} />
        </IconButton>
        <IconButton disabled={!isSwitchOn}>
          <SurroundSoundOutlinedIcon sx={{ color: 'black', fontSize: 25 }} />
        </IconButton>
      </Box>

    </Box>
  );
}

export default Section2_3;
