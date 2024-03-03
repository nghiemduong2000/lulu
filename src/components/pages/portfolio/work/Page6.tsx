import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import Image from 'next/image';
import Divider from '@mui/material/Divider';
import { makeStyles } from 'tss-react/mui';
import work_1 from 'public/work_1.png';
import Link from '@mui/material/Link';

const useStyles = makeStyles()(() => ({
    wrapperPages: {
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
        width: '72%',
        position: 'relative',
        aspectRatio: '1 / 1',
    },
}));

const Page6 = () => {
    const { classes } = useStyles();
    return (
        <Box className={classes.wrapperPages}>
            <Box className="page">
                <Box className={classes.wrapperImage}>
                    <Image fill src={work_1.src} alt="certificate" />
                </Box>
            </Box>
            <Box className="page">
                <Typography variant="h2">KINH NGHIỆM</Typography>
                <Divider />
                <Typography variant="h6">Video Creator</Typography>
                <Typography variant="subtitle1">(Apero Technologies Group) | Tháng 11/2022 - Tháng 3/2023</Typography>
                <ul>
                    <li>Sản xuất các video Branding (Internal & External)</li>
                    <li>Hỗ trợ, lên ý tưởng và kế hoạch các hoạt động truyền thông</li>
                    <li>Chuẩn bị hồ sơ dự thảo cuộc thi, đề cử doanh nghiệp</li>
                    <li>Booking báo chí</li>
                </ul>
                <Link target="_blank" href="https://www.tiktok.com/@aperotech?lang=vi-VN">
                    Link kênh TikTok công ty
                </Link>
                <Link target="_blank" href="https://www.facebook.com/aperogroup/videos/637741261694399">
                    Link video Year End Party
                </Link>
            </Box>
        </Box>
    );
};

export default Page6;
