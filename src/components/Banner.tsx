'use client';

import Box from "@mui/material/Box";
import { makeStyles } from "tss-react/mui";
import { FC, PropsWithChildren } from "react";
import Image from "next/image";

const useStyles = makeStyles()(({ breakpoints }) => ({
  wrapperBanner: {
    width: '100%',
    height: '100vh',
    position: 'relative',
    img: {
        objectPosition: '40% 0%',
        [breakpoints.up('md')]: {
            objectPosition: 'top',
        }
    }
  },
}));

const Banner: FC<PropsWithChildren & { src: string }> = ({ src, children }) => {
    const { classes } = useStyles();

    return (
        <Box className={classes.wrapperBanner}>
            <Image
                fill
                src={src}
                alt="banner"
                style={{
                    objectFit: 'cover',
                }}
            />
            <Box position="absolute" top="0px" left="0px" width="100%" height="100%">
                {children}
            </Box>
        </Box>
    );
};

export default Banner;
