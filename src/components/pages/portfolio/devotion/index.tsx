'use client';
import Banner from "@/components/Banner";
import Book from "@/components/Book";
import Box from "@mui/material/Box";
import devotion_bg from 'public/devotion_bg.png';
import { makeStyles } from "tss-react/mui";
import { roboto_condensed } from "@/app/fonts";
import Page1 from "./Page1";
import Page2 from "./Page2";

const useStyles = makeStyles()(() => ({
  wrapper: {
    fontFamily: roboto_condensed.style.fontFamily,
  },
}));

const pages = [<Page1 key="page1" />, <Page2 key="page2" />];

const Devotion = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Banner src={devotion_bg.src}>
        <Book pages={pages} title="Lu cống hiến" />
      </Banner>
    </Box>
  )
}

export default Devotion;
