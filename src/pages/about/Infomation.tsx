'use client';
import Box from '@mui/material/Box';
import Image from "next/image";
import { makeStyles } from 'tss-react/mui';
import topDecor from 'public/topDecor.png';
import avatar from 'public/avatar.png';
import chainedBoard from 'public/chained_board.png';
import infoBoard from 'public/info_board.png';
import contactBoard from 'public/contact_board.png';
import { playpen_sans } from '@/app/fonts';
import { Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const useStyles = makeStyles()((theme) => ({
    wrapperInformation: {
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative',
        '.information-wave': {
            top: '0px',
            left: '50%',
            width: '100%',
            position: 'absolute',
            aspectRatio: '600 / 241',
            transform: 'translateX(-50%)',
        },
        '.information-wrapper-info-board': {
            gap: '5%',
            padding: '90px 30px 30px',
            display: 'grid',
            position: 'relative',
            borderRadius: '20px',
            margin: '190px auto 100px',
            width: 'calc(100% - 200px)',
            backgroundColor: '#F9BC61',
            boxShadow: '0 0 0 30px #B6541E',
            gridTemplateRows: 'repeat(2, 1fr)',
            gridTemplateColumns: '35% 60%',
            gridTemplateAreas: `'avatar contact' 'description description'`,
            [theme.breakpoints.up('md')]: {
                padding: '80px 30px 30px',
                margin: '240px auto 100px',
                width: 'calc(100% - 350px)',
                boxShadow: '0 0 0 40px #B6541E',
            },
            [theme.breakpoints.up('lg')]: {
                padding: '90px 30px 30px',
            },
            [theme.breakpoints.up('xl')]: {
                padding: '100px',
                margin: '320px auto 100px',
            },
            '.contacts-wrapper': {
                gap: '18px',
                color: 'white',
                height: '100%',
                display: 'flex',
                fontSize: '26px',
                position: 'relative',
                flexDirection: 'column',
                justifyContent: 'space-between',
                '.contact': {
                    gap: '20px',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    '.icon': {
                        flex: '0.18',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '.MuiSvgIcon-root': {
                            fontSize: '26px',
                            [theme.breakpoints.up('lg')]: {
                                fontSize: '34px',
                            },
                        },
                    },
                    '.MuiTypography-body1': {
                        fontSize: '16px',
                        textAlign: 'center',
                        [theme.breakpoints.up('lg')]: {
                            fontSize: '22px',
                        },
                    },
                },
            },
            '& > .MuiBox-root': {
                '&:first-of-type': {
                    position: 'relative',
                    aspectRatio: '430 / 670',
                },
                '&:nth-of-type(2)': {
                    position: 'relative',
                    aspectRatio: '1024 / 915',
                },
                '&:last-of-type': {
                    gap: '32px',
                    display: 'flex',
                    padding: '34px',
                    borderRadius: '32px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: '#D4AB7E',
                    border: '8px solid #6A5446',
                    '.MuiTypography-caption': {
                        color: 'black',
                        fontSize: '32px',
                    },
                },
            },
        },
        '.information-info-board': {
            margin: '300px 200px 100px',
            width: 'calc(100% - 400px)',
        },
        '.information-chained_board': {
            top: '0px',
            left: '50%',
            position: 'absolute',
            aspectRatio: '10 / 7',
            transform: 'translateX(-50%)',
            width: '600px',
            [theme.breakpoints.up('md')]: {
                width: '700px',
            },
            [theme.breakpoints.up('xl')]: {
                width: '950px',
            },
            '.MuiTypography-subtitle1': {
                top: '120px',
                left: '50%',
                color: 'white',
                fontSize: '40px',
                fontWeight: '700',
                position: 'absolute',
                transform: 'translateX(-50%)',
                textShadow: '3px 3px 0px #4141416a',
                fontFamily: playpen_sans.style.fontFamily,
                [theme.breakpoints.up('md')]: {
                    top: '130px',
                    fontSize: '50px',
                },
                [theme.breakpoints.up('xl')]: {
                    top: '180px',
                    fontSize: '65px',
                },
            }
        },
    },
}));

const contactInfos = [
    {
        value: 'phone',
        label: '0978.829.515',
        icon: <PhoneIcon sx={{ fontSize: '40px' }} />,
    },
    {
        value: 'email',
        label: 'honghanh25.job@gmail.com',
        icon: <EmailIcon sx={{ fontSize: '40px' }} />,
    },
    {
        value: 'instagram',
        label: '@kat.iaartist',
        icon: <InstagramIcon sx={{ fontSize: '40px' }} />,
    },
    {
        value: 'linkedin',
        label: 'www.linkedin.com/in/honghanh25/',
        icon: <LinkedInIcon sx={{ fontSize: '40px' }} />,
    },
    {
        value: 'tiktok',
        label: '@beluxinhne',
        icon: <MusicNoteIcon sx={{ fontSize: '40px' }} />,
    },
]

const Information = () => {
    const { classes } = useStyles();
    return (
        <Box className={classes.wrapperInformation}>
            <Box className="information-wave">
                <Image
                    fill
                    src={topDecor.src}
                    alt="wave"
                    style={{
                        objectFit: 'cover',
                        objectPosition: '0% 50%',
                    }}
                />
            </Box>
            <Box className="information-wrapper-info-board">
                <Box gridArea="avatar">
                    <Image
                        fill
                        src={avatar.src}
                        alt="avatar"
                        style={{
                            objectFit: 'cover',
                            objectPosition: '0% 50%',
                        }}
                    />
                </Box>
                <Box gridArea="contact">
                    <Image
                        fill
                        src={contactBoard.src}
                        alt="avatar"
                        style={{
                            objectFit: 'cover',
                            objectPosition: '0% 50%',
                        }}
                    />
                    <Box className="contacts-wrapper">
                        {contactInfos.map((info) => (
                            <Box key={info.value} className="contact">
                                <Box className="icon">{info.icon}</Box>
                                <Typography variant="body1" flex="0.8">{info.label}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box gridArea="description">
                    <Typography variant="caption">
                        Họ tên đầy đủ <strong>Ngô Hồng Hạnh</strong>, trào đời vào ngày 25/08/2001, tại một thị xã nhỏ ở tỉnh Hưng Yên, Việt Nam.
                    </Typography>
                </Box>
            </Box>
            <Box className="information-chained_board">
                <Image
                    fill
                    src={chainedBoard.src}
                    alt="wave"
                    style={{
                        objectFit: 'cover',
                        objectPosition: '0% 50%',
                    }}
                />
                <Typography variant="subtitle1">Information</Typography>
            </Box>
        </Box>
    );
};

export default Information;
