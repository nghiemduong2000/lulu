'use client';
import BannerHome from '@/components/BannerPortfolio';
import { Box, Typography } from '@mui/material';
import { WheelEventHandler, useRef } from 'react';

import { makeStyles } from "tss-react/mui";
import Navbar from '@/components/Navbar';

const useStyles = makeStyles()(() => ({
  wrapper: {
    height: '100vh',
    overflow: 'auto',
    position: 'relative',
  },
}));

const Podcast = () => {
  const { classes } = useStyles();

  const ref = useRef<HTMLDivElement>(null);

  const handleWheel: WheelEventHandler = (event) => {
    event.stopPropagation();
  }

  return (
    <Box ref={ref} className={classes.wrapper} onWheel={handleWheel}>
      <Navbar />
      <BannerHome parentRef={ref} />
      <Box height="100vh">
        <Typography variant='h1'>Hello World</Typography>  
      </Box>
    </Box>
  )
};

export default Podcast;
