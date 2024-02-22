'use client';
import Box from '@mui/material/Box';
import aboutBg from 'public/about_bg.png';
import { spectral } from "@/app/fonts";

import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Intro from './Intro';
import { Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { useTranslations } from 'next-intl';
import Information from './Infomation';

const useStyles = makeStyles()(() => ({
  wrapperFloatText: {
    width: '100%',
    height: '100%',
    position: 'relative',
    '.MuiTypography-h5': {
      color: 'white',
      fontWeight: 700,
      fontSize: '150px',
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      textShadow: '10px 10px 5px #414141aa',
      fontFamily: spectral.style.fontFamily,
      '&:nth-of-type(1)': {
        top: '36%',
        left: '30%',
      },
      '&:nth-of-type(2)': {
        top: '50%',
        left: '50%',
      },
      '&:nth-of-type(3)': {
        top: '64%',
        left: '70%',
      },
    },
  },
}));

const About = () => {
  const { classes } = useStyles();
  const t = useTranslations();
  return (
    <Box>
      <Navbar />
      <Banner src={aboutBg.src}>
        <Box className={classes.wrapperFloatText}>
          <Typography variant="h5">{t('aboutLu.i')}</Typography>
          <Typography variant="h5">{t('aboutLu.am')}</Typography>
          <Typography variant="h5">{t('aboutLu.lu')}</Typography>
        </Box>
      </Banner>
      <Intro />
      <Information />
    </Box>
  )
};

export default About;
