import React from 'react';
import { Box, Grid, useMediaQuery } from '@mui/material';
import Section1_1 from '../components/home/Section1.1';
import Section1_2 from '../components/home/Section1.2';
import Section2_1 from '../components/home/Section2.1';
import Section2_2 from '../components/home/Section2.2';
import Section2_3 from '../components/home/Section2.3';


const Home = () => {
  const isSmallScreen = useMediaQuery('(max-width:1500px)');

  return (
    <Box display="flex" flexDirection="column" height="100%" width="100%" gap={2}>
      {isSmallScreen ? (
        <Grid container spacing={2} justifyContent="center" height="100%" sx={{ overflow: 'auto' }}>
          <Grid item xs={12}>
            <Section1_1 />
          </Grid>
          <Grid item xs={12}>
            <Section2_1 />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Section1_2 />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Section2_2 />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Section2_3 />
          </Grid>
        </Grid>
      ) : (
        <>
          <Grid container spacing={2} sx={{ flex: 2 }}>
            <Grid item xs={9}>
              <Section1_1 />
            </Grid>
            <Grid item xs={3}>
              <Section1_2 />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ flex: 2 }}>
            <Grid item xs={6}>
              <Section2_1 />
            </Grid>
            <Grid item xs={3}>
              <Section2_2 />
            </Grid>
            <Grid item xs={3}>
              <Section2_3 />
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
}

export default Home;