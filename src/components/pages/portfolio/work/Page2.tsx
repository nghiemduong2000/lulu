import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import Image from 'next/image';
import Divider from '@mui/material/Divider';
import { makeStyles } from 'tss-react/mui';
import work_1 from 'public/work/1_1.png';
import work_2 from 'public/work/1_2.png';
import work_3 from 'public/work/1_3.png';
import work_4 from 'public/work/1_4.png';
import work_5 from 'public/work/1_5.png';
import work_6 from 'public/work/1_6.png';
import work_7 from 'public/work/1_7.png';
import Link from '@mui/material/Link';

const useStyles = makeStyles()(() => ({
    wrapperPages: {
        display: 'flex',
        '.page': {
          width: '50%',
          display: 'flex',
          position: 'relative',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          ':nth-of-type(1)': {
            display: 'flex',
            flexDirection: 'column',
            padding: '0 2vw 0 4vw',
            '& > .MuiTypography-h3': {
              fontWeight: 700,
              fontSize: '1vw',
              color: '#623E23',
            },
            '& > .MuiTypography-caption': {
              maxWidth: '70%',
              fontWeight: 400,
              fontSize: '0.8vw',
              lineHeight: '1vw',
              color: '#231F20',
              textAlign: 'center',
            },
            '.image1, .image2': {
              width: '90%',
              position: 'relative',
              margin: '0.6vw 0 0.5vw',
              aspectRatio: '179 / 82',
            },
          },
          ':nth-of-type(2)': {
              padding: '0 6vw 0 3vw',
              '.image3, .image4, image5': {
                  width: '30%',
                  position: 'relative',
                  aspectRatio: '92 / 68',
              },
              '.image6, .image7': {
                width: '40%',
                position: 'relative',
                aspectRatio: '1 / 1',
            },
              '& > .MuiTypography-caption': {
                  maxWidth: '70%',
                  fontWeight: 400,
                  margin: '0.5vw 0',
                  fontSize: '0.8vw',
                  lineHeight: '1vw',
                  color: '#231F20',
                  textAlign: 'center',
              },
              '& > .MuiTypography-body1': {
                  fontWeight: 400,
                  fontSize: '0.8vw',
                  lineHeight: '1vw',
                  color: '#231F20',
                  marginBottom: '0.8vw',
              },
          },
      },
    },
}));

const Page2 = () => {
    const { classes } = useStyles();
    return (
        <Box className={classes.wrapperPages}>
            <Box className="page">
                <Box className="image1">
                    <Image fill src={work_1.src} alt="certificate" />
                </Box>
                <Box className="image2">
                    <Image fill src={work_2.src} alt="certificate" />
                </Box>
            </Box>
            <Box className="page">
                <Box className="wrapperContent">
                    <Box className="info">
                        <Typography variant="h2">VXT EDU</Typography>
                        <Divider />
                        <Typography variant="body1">Trưởng ban tổ chức sự kiện Online và Offline với quy mô 350 người ( 5 nhân sự hỗ trợ, 4 media quay/chụp, 5 cộng tác viên). Sự kiện Tết cổ truyền cho học viên (20 - 30 tuổi). Xây dựng key visual, concept riêng cho sự kiện.</Typography>
                        <Link target="_blank" href="https://www.canva.com/design/DAF52aLY5Xo/CsY9sTA1K5fR5iKKDowkug/edit?utm_content=DAF52aLY5Xo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                            Sample event proposal
                        </Link>
                        <Box display="flex">
                            <Box className="image3">
                                <Image fill src={work_3.src} alt="certificate" />
                            </Box>
                            <Box className="image4">
                                <Image fill src={work_4.src} alt="certificate" />
                            </Box>
                            <Box className="image5">
                                <Image fill src={work_5.src} alt="certificate" />
                            </Box>
                        </Box>
                        <Box className="link">
                            <Typography variant="h3">Xem kế hoạch sự kiện mẫu:</Typography>
                            <Link target="_blank" href="https://docs.google.com/spreadsheets/d/1uXT43h1v_2DYsuWyW-6jAdEAeDZTJOcg/edit?usp=drive_link&ouid=101083315837558927648&rtpof=true&sd=true">
                                TẠI ĐÂY
                            </Link>
                        </Box>
                        <Box display="flex">
                            <Box className="image6">
                                <Image fill src={work_6.src} alt="certificate" />
                            </Box>
                            <Box className="image7">
                                <Image fill src={work_7.src} alt="certificate" />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Page2;
