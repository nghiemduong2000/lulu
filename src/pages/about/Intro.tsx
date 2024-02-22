'use client';
import Box from '@mui/material/Box';
import Image from "next/image";
import { makeStyles } from 'tss-react/mui';
import wave from 'public/wave.png';
import boat from 'public/boat.png';
import { Typography } from '@mui/material';
import { roboto_condensed } from '@/app/fonts';
import { useTranslations } from 'next-intl';

const useStyles = makeStyles()(() => ({
    wrapperIntro: {
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: "#FABB62",
        '.gradient-blue': {
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'absolute',
            background: "linear-gradient(0deg, #1a3d6de3 0%, #1a3d6d7a 3%, #1a3d6d3b 5%, transparent 8%, transparent 100%) no-repeat",
        },
        '.intro-content': {
            gap: '20px',
            width: '50%',
            display: 'flex',
            height: '100%',
            padding: '100px 70px',
            flexDirection: 'column',
            backgroundColor: '#FFF4E9',
            '.MuiTypography-caption': {
                fontSize: '20px',
                color: '#866B59',
                textAlign: 'justify',
                letterSpacing: '0px',
                fontFamily: roboto_condensed.style.fontFamily,
                strong: {
                    fontStyle: 'italic',
                },
            },
        },
        '.intro-wave': {
            right: '0px',
            bottom: '0px',
            width: '100%',
            aspectRatio: '5 / 4',
            position: 'absolute',
            transform: 'scale(0.75) translate(20%, 30%)',
        },
        '.intro-boat': {
            right: '0px',
            bottom: '0px',
            width: '100%',
            position: 'absolute',
            aspectRatio: '1600 / 1431',
            transformOrigin: '100%  100%',
            transform: 'scale(0.45) translate(-40%, 0%)',
        }
    },
}));

const Intro = () => {
    const { classes } = useStyles();
    const t = useTranslations();
    return (
        <Box className={classes.wrapperIntro}>
            <Box className="intro-content">
                <Typography variant="caption">
                    {t('aboutLu.intro.paragraph1')}
                </Typography>
                <Typography variant="caption">
                    {t('aboutLu.intro.paragraph2')}
                </Typography>
                <Typography variant="caption">
                    {t.rich('aboutLu.intro.paragraph3', {
                        strong: (chunks) => <strong>{chunks}</strong>
                    })}
                </Typography>
            </Box>
            <Box className="intro-wave">
                <Image
                    fill
                    src={wave.src}
                    alt="wave"
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'left bottom',
                    }}
                />
            </Box>
            <Box className="intro-boat">
                <Image
                    fill
                    src={boat.src}
                    alt="boat"
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'left bottom',
                    }}
                />
            </Box>
            <Box className="gradient-blue" />
        </Box>
    );
};

export default Intro;
