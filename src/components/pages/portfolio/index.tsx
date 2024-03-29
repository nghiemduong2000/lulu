'use client';
import BannerPortfolio from '@/components/BannerPortfolio';
import { Box } from '@mui/material';
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

const Portfolio = () => {
  const { classes } = useStyles();

  const ref = useRef<HTMLDivElement>(null);

  const handleWheel: WheelEventHandler = (event) => {
    event.stopPropagation();
  }

  return (
    <Box ref={ref} className={classes.wrapper} onWheel={handleWheel}>
      <Navbar />
      <BannerPortfolio parentRef={ref} />
    </Box>
  )
};

export default Portfolio;
