'use client';
import BannerHome from '@/components/BannerHome';
import { Box, Typography } from '@mui/material';
import { FC, WheelEventHandler, useEffect, useRef } from 'react';
import wood_board from '../../public/wood_board.png';


import { makeStyles } from "tss-react/mui";
import { playpen_sans } from './fonts';

const useStyles = makeStyles()(() => ({
  wrapper: {
    height: '100vh',
    overflow: 'auto',
    position: 'relative',
  },
  wrapperMenu: {
    top: 0,
    left: 0,
    zIndex: 1,
    gap: '30px',
    width: '100%',
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
  },
  woodBoard: {
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.2s linear',
    img: {
        width: '180px',
    },
    '.MuiTypography-h3': {
        left: '0px',
        width: '100%',
        bottom: '32px',
        fontWeight: 700,
        fontSize: '16px',
        display: 'block',
        color: '#FFF4E9',
        textAlign: 'center',
        position: 'absolute',
        transition: 'all 0.2s linear',
        fontFamily: playpen_sans.style.fontFamily,
    },
    '&:hover': {
        transform: 'translateY(8px) scale(1.1)',
        '.MuiTypography-h3': {
            transform: 'scale(1.1)',
        },
    },
  },
}));

const menus = [
  {
      title: 'About Lu',
  },
  {
      title: 'Education',
  },
  {
      title: 'Achievement',
  },
  {
      title: 'Skill',
  },
  {
      title: 'Project',
  },
  {
      title: 'Other land',
  },
];

const BoardMenu: FC<{ title: string }> = ({ title }) => {
  const { classes } = useStyles();

  return (
      <Box className={classes.woodBoard}>
          <img src={wood_board.src} />
          <Typography variant="h3">{title.toUpperCase()}</Typography>
      </Box>
  )
};

export default function Home() {
  const { classes } = useStyles();

  const ref = useRef<HTMLDivElement>(null);

  const handleWheel: WheelEventHandler = (event) => {
    event.stopPropagation();
  }

  return (
    <Box ref={ref} className={classes.wrapper} onWheel={handleWheel}>
      <Box className={classes.wrapperMenu}>
        {menus.map((menu) => (
            <BoardMenu key={menu.title} title={menu.title} />
        ))}
      </Box>
      <BannerHome parentRef={ref} />
      <Box height="100vh">
        <Typography variant='h1'>Hello World</Typography>  
      </Box>
    </Box>
  )
}
