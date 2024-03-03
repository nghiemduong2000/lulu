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
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";

const useStyles = makeStyles()(() => ({
  wrapper: {
    fontFamily: roboto_condensed.style.fontFamily,
  },
}));

const pages = [<Page1 key="page1" />, <Page2 key="page2" />, <Page3 key="page3" />, <Page4 key="page4" />, <Page5 key="page5" />, <Page6 key="page6" />];

const Work = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Banner src={devotion_bg.src}>
        <Book pages={pages} title="Lu đi làm" />
      </Banner> 
    </Box>
  )
}

export default Work;
