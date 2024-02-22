'use client';

import Box from "@mui/material/Box";
import { makeStyles } from "tss-react/mui";
import letterL from '../../../public/letter_l.png';
import { FC } from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import LinkMaterial from "@mui/material/Link";
import { playpen_sans } from "@/app/fonts";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

const useStyles = makeStyles()(() => ({
  wrapperFooter: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#FFF4E9',
    '.footer': {
        top: '50%',
        gap: '64px',
        margin: 'auto',
        padding: '32px',
        display: 'grid',
        maxWidth: '1000px',
        position: 'relative',
        transform: 'translateY(-50%)',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        '&-left': {
            minWidth: '200px',
            position: 'relative',
            aspectRatio: '900 / 1024',
        },
        '&-right': {
            fontFamily: playpen_sans.style.fontFamily,
            gridTemplateAreas: `'capabilities portfolio' 'copyright contacts'`,
            '.MuiTypography-h4': {
                fontWeight: 700,
                fontSize: '72px',
                gridArea: 'title',
                color: '#BD7A33',
                textAlign: 'center',
                fontFamily: 'inherit',
                whiteSpace: 'pre-wrap',
            },
            '.navigation': {
                gap: '8px',
                display: 'flex',
                flexDirection: 'column',
                '.MuiTypography-subtitle1': {
                    fontWeight: 700,
                    fontSize: '24px',
                    color: '#a2a354',
                    textAlign: 'center',
                    fontFamily: 'inherit',
                },
                a: {
                    fontWeight: 500,
                    fontSize: '16px',
                    color: '#cf9972',
                    textAlign: 'center',
                    textDecoration: 'underline',
                },
            },
            '&__content': {
                rowGap: '32px',
                display: 'grid',
                columnGap: '8px',
                marginTop: '32px',
                gridTemplateAreas: `'capabilities portfolio' 'copyright contacts'`,
                '&--capabilities': {
                    gridArea: 'capabilities',
                },
                '&--portfolio': {
                    gridArea: 'portfolio',
                },
                '&--copyright': {
                    display: 'flex',
                    gridArea: 'copyright',
                    justifyContent: 'center',
                    '.MuiTypography-caption': {
                        fontWeight: 500,
                        fontSize: '16px',
                        color: '#a2a354',
                        fontFamily: 'inherit',
                    }
                },
                '&--contacts': {
                    gap: '8px',
                    display: 'flex',
                    gridArea: 'contacts',
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
                        {Object.values(footerInfos(t)).map((info, idx) => (
                            <Box key={idx} className={`${info.className} navigation`}>
                                <Typography variant="subtitle1">{info.title}</Typography>
                                {info.children.map((capability, idx) => (
                                    <Link key={idx} href={capability.path}>{capability.label}</Link>    
                                ))}
                            </Box>
                        ))}
                        <Box className="footer-right__content--copyright">
                            <Typography variant="caption">Ⓡ 2024, Lululand.</Typography>
                        </Box>
                        <Box className="footer-right__content--contacts">
                            <LinkMaterial target="_blank" href="https://www.linkedin.com/">
                                <LinkedInIcon />
                            </LinkMaterial>
                            <LinkMaterial target="_blank" href="https://www.instagram.com/">
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
