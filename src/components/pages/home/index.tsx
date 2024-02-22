'use client';
import Box from '@mui/material/Box';
import homeBg from 'public/home_bg.png';

import Navbar from '@/components/Navbar';
import Footer from './Footer';
import Banner from '@/components/Banner';

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Banner src={homeBg.src} />
      <Footer />
    </Box>
  )
};

export default Home;
