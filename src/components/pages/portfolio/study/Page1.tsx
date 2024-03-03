import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import Image from 'next/image';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import { makeStyles } from 'tss-react/mui';
import message from "public/message.svg";
import luStudy from 'public/lu-study.png';

const useStyles = makeStyles()(() => ({
    wrapperPages: {
        width: '100%',
        display: 'flex',
        '.page': {
            flex: 1,
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            '.wrapperContent': {
              gap: '5vw',
              display: 'flex',
              maxWidth: '80%',
              flexDirection: 'column',
              '.info': {
                '.MuiDivider-root': {
                  width: '20%',
                  margin: '1vw 0',
                  borderWidth: '0.2vw',
                  borderColor: '#7D5932',
                },
                '.MuiTypography-h2': {
                  fontSize: '1.9vw',
                  fontWeight: 700,
                  color: '#623E23',
                  textTransform: 'uppercase',
                },
                '.MuiTypography-h3': {
                  fontSize: '1.3vw',
                  fontWeight: 700,
                  color: '#7D5932',
                  span: {
                    fontWeight: 400,
                    fontSize: '1.3vw',
                    color: '#3E2A1E',
                  },
                  '&:not(:first-of-type)': {
                    marginTop: '1vw',
                  },
                },
                ul: {
                  li: {
                    fontSize: '1.2vw',
                    marginLeft: '2vw',
                    color: '#3E2A1E',
                    lineHeight: '2vw',
                  },
                },
              },
              '.link': {
                display: 'flex',
                flexWrap: 'nowrap',
                '.MuiTypography-h3': {
                  flex: 1,
                  fontWeight: 700,
                  fontSize: '1.3vw',
                  color: '#7D5932',
                },
                a: {
                  flex: 2.5,
                  fontSize: '1.3vw',
                  wordBreak: 'break-all',
                },
              }
            },
        },
    },
    wrapperImage: {
        width: '55%',
        position: 'relative',
        aspectRatio: '373 / 467',
    },
    graduate: {
        top: '13%',
        right: '5%',
        zIndex: 1,
        width: '40%',
        position: 'absolute',
        aspectRatio: '200 / 71',
        '.MuiTypography-caption': {
            top: '40%',
            left: '50%',
            fontSize: '1.5vw',
            color: '#866B59',
            userSelect: 'none',
            position: 'absolute',
            whiteSpace: 'nowrap',
            fontFamily: 'inherit',
            display: 'inline-block',
            transform: 'translate(-50%, -50%) rotate(-7deg)'
        },
        img: {
             zIndex: -1,
        },
    },
}));

const Page1 = () => {
    const { classes } = useStyles();
    return (
        <Box className={classes.wrapperPages}>
            <Box className="page">
                <Box className={classes.graduate}>
                    <Image fill src={message} alt="message" />
                    <Typography variant="caption">Lu tốt nghiệp</Typography>
                </Box>
                <Box className={classes.wrapperImage}>
                    <Image fill src={luStudy.src} alt="Wood board" />
                </Box>
            </Box>
            <Box className="page">
                <Box className="wrapperContent">
                    <Box className="info">
                        <Typography variant="h2">Học vấn</Typography>
                        <Divider />
                        <Typography variant="h3">Đại học Kinh tế Quốc Dân</Typography>
                        <ul>
                            <li>Tốt nghiệp chuyên ngành Quản trị Marketing</li>
                            <li><strong>GPA: 3.35/4</strong></li>
                            <li>APTIS B2 </li>
                        </ul>
                        <Typography variant="h3">
                            Chứng chỉ ICDL
                            <span> (thành thào Microsoft Office)</span>
                        </Typography>
                        <Typography variant="h3">
                            HTML5,CSS3 & SEO
                            <span> (Coursera)</span>
                        </Typography>
                    </Box>
                    <Box className="link">
                        <Typography variant="h3">LINK DRIVE GIẤY TỜ</Typography>
                        <Link target="_blank" href="https://drive.google.com/drive/folders/16kPCkaDpVyHMuE_YiOMVNQP1WehJyt1l?usp=sharing">
                            https://drive.google.com/drive/folders/16kPCkaDpVyHMuE_YiOMVNQP1WehJyt1l?usp=sharing
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Page1;
