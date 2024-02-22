'use client';

import Box from "@mui/material/Box";
import { makeStyles } from "tss-react/mui";
import { FC, PropsWithChildren } from "react";
import Image from "next/image";

const useStyles = makeStyles()(() => ({
  wrapperBanner: {
    width: '100%',
    height: '100vh',
    position: 'relative',
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
                    objectPosition: 'top',
                }}
            />
            <Box position="absolute" top="0px" left="0px" width="100%" height="100%">
                {children}
            </Box>
        </Box>
    );
};

export default Banner;
