'use client';
import Banner from "@/components/Banner";
import Book from "@/components/Book";
import Box from "@mui/material/Box";
import study_bg from 'public/study_bg.png';
import { makeStyles } from "tss-react/mui";
import { roboto_condensed } from "@/app/fonts";
import Page1 from "./Page1";

const useStyles = makeStyles()(() => ({
  wrapper: {
    fontFamily: roboto_condensed.style.fontFamily,
  },
}));

const pages = [<Page1 key="page1" />];

const Study = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Banner src={study_bg.src}>
        <Book pages={pages} title="Lu đi học" />
      </Banner> 
    </Box>
  )
}

export default Study