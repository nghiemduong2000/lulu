'use client';

import Box from "@mui/material/Box";
import { makeStyles } from "tss-react/mui";
import letterL from 'public/letter_l.png';
import { FC } from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import LinkMaterial from "@mui/material/Link";
import { playpen_sans } from "@/app/fonts";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTranslations } from "next-intl";

const useStyles = makeStyles()(({ breakpoints }) => ({
  wrapperFooter: {
    width: '100vw',
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF4E9',
    '.footer': {
        gap: '64px',
        width: '100%',
        height: '100%',
        padding: '32px',
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '1000px',
        alignItems: 'center',
        justifyContent: 'center',
        '&-left': {
            flex: 1,
            minWidth: '350px',
            maxWidth: '500px',
            position: 'relative',
            aspectRatio: '900 / 1024',
            [breakpoints.up('sm')]: {
                minWidth: '490px',
            },
        },
        '&-right': {
            flex: 1,
            fontFamily: playpen_sans.style.fontFamily,
            '.MuiTypography-h4': {
                fontWeight: 700,
                fontSize: '35px',
                gridArea: 'title',
                color: '#BD7A33',
                textAlign: 'center',
                fontFamily: 'inherit',
                whiteSpace: 'pre-wrap',
                [breakpoints.up('sm')]: {
                    fontSize: '50px',
                },
                [breakpoints.up('md')]: {
                    fontSize: '60px',
                }
            },
            '&__content': {
                display: 'flex',
                columnGap: '8px',
                marginTop: '32px',
                '&--copyright': {
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    '.MuiTypography-caption': {
                        fontWeight: 500,
                        fontSize: '16px',
                        color: '#a2a354',
                        fontFamily: 'inherit',
                    }
                },
                '&--contacts': {
                    flex: 1,
                    gap: '8px',
                    display: 'flex',
                    justifyContent: 'center',
                    '.MuiLink-root': {
                        display: 'inline-block',
                        '.MuiSvgIcon-root': {
                            color: '#a2a354',
                            fontSize: '28px',
                        },
                    },
                },
            },
        },
    },
  },
}));

const footerInfos = (t: (value: string) => string) => ({
    capabilities: {
        title: 'Capabilities',
        className: 'footer-right__content--capabilities',
        children: [
            { label: 'Lorem Ipsum', path: '/' },
            { label: 'Lorem Ipsum', path: '/' },
            { label: 'Lorem Ipsum', path: '/' },
            { label: 'Lorem Ipsum', path: '/' },
            { label: 'Lorem Ipsum', path: '/' },
        ]
    },
    portfolio: {
        title: 'Portfolio',
        className: 'footer-right__content--portfolio',
        children: [
            { label: 'Lorem Ipsum', path: '/' },
            { label: 'Lorem Ipsum', path: '/' },
            { label: 'Lorem Ipsum', path: '/' },
            { label: 'Lorem Ipsum', path: '/' },
            { label: 'Lorem Ipsum', path: '/' },
        ]
    },
})

const Footer: FC = () => {
    const t = useTranslations();
    const { classes } = useStyles();

    return (
        <Box className={classes.wrapperFooter}>
            <Box className="footer">
                <Box className="footer-left">
                    <Image
                        fill
                        alt="image"
                        src={letterL.src}
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </Box>
                <Box className="footer-right">
                    <Typography variant="h4" sx={{ gridArea: 'title' }}>{`Welcome to\nLululand`}</Typography>
                    <Box className="footer-right__content">
                        <Box className="footer-right__content--copyright">
                            <Typography variant="caption">Ⓡ 2024, Lululand.</Typography>
                        </Box>
                        <Box className="footer-right__content--contacts">
                            <LinkMaterial target="_blank" href="https://www.linkedin.com/in/honghanh25/">
                                <LinkedInIcon />
                            </LinkMaterial>
                            <LinkMaterial target="_blank" href="https://www.instagram.com/kat.iaartist/">
                                <InstagramIcon />
                            </LinkMaterial>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
