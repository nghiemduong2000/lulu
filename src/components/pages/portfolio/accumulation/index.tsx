'use client';
import Banner from "@/components/Banner";
import Book from "@/components/Book";
import Box from "@mui/material/Box";
import devotion_bg from 'public/devotion_bg.png';

import { makeStyles } from "tss-react/mui";
import { roboto_condensed } from "@/app/fonts";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

const useStyles = makeStyles()(() => ({
  wrapper: {
    fontFamily: roboto_condensed.style.fontFamily,
  },
}));

const pages = [<Page1 key="page1" />, <Page2 key="page2" />, <Page3 key="page3" />];

const Accumulation = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Banner src={devotion_bg.src}>
        <Book pages={pages} title="Lu tích luỹ" />
      </Banner>
    </Box>
  )
}

export default Accumulation;
