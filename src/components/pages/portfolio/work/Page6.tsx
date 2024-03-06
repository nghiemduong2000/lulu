import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import Image from 'next/image';
import Divider from '@mui/material/Divider';
import { makeStyles } from 'tss-react/mui';
import work_1 from 'public/work/5_1.png';
import work_2 from 'public/work/5_2.png';
import { roboto_condensed } from "@/app/fonts";
import Link from '@mui/material/Link';

const useStyles = makeStyles()(() => ({
  wrapperPages: {
    width: '100%',
    display: 'flex',
    letterSpacing: '1px',
    fontFamily: roboto_condensed.style.fontFamily,
    '.page': {
      flex: 1,
      display: 'flex',
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      ':nth-of-type(1)': {
        padding: '0 1.4vw 0 3vw',
      },
      ':nth-of-type(2)': {
        padding: '0 1.8vw 0 1.5vw',
        '.wrapperContent': {
          gap: '5vw',
          width: '90%',
          display: 'flex',
          flexDirection: 'column',
          '.info': {
            display: 'flex',
            flexDirection: 'column',
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
              fontSize: '1vw',
              fontWeight: 700,
              color: '#7D5932',
              marginBottom: '0.5vw',
            },
            '.MuiTypography-subtitle1': {
              fontSize: '0.8vw',
              fontWeight: 400,
              color: '#3E2A1E',
            },
            '.MuiTypography-caption': {
              fontWeight: 700,
              marginTop: '1vw',
              fontSize: '1.2vw',
              color: '#7A492C',
              textAlign: 'center',
              display: 'inline-block',
            },
            ul: {
              margin: '0.5vw 0',
              li: {
                fontSize: '0.8vw',
                marginLeft: '2vw',
                color: '#3E2A1E',
                lineHeight: '1.5vw',
                fontFamily: roboto_condensed.style.fontFamily,
              },
            },
            '.image1': {
              width: '100%',
              position: 'relative',
              aspectRatio: '716 / 328',
            }
          },
        },
      }
    },
  },
  wrapperImage: {
    width: '84%',
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
          <Box className="wrapperContent">
            <Box className="info">
              <Typography variant="h2">Kinh nghiệm</Typography>
              <Divider />
              <Typography variant="h3">Video Creator</Typography>
              <Typography variant="subtitle1">Apero Technologies Group | Tháng 11/2022 - Tháng 3/2023</Typography>
              <ul>
                <li>Sản xuất các video Branding (Internal & External)</li>
                <li>Hỗ trợ, lên ý tưởng và kế hoạch các hoạt động truyền thông</li>
                <li>Chuẩn bị hồ sơ dự thảo cuộc thi, đề cử doanh nghiệp</li>
                <li>Booking báo chí</li>
              </ul>
              <Box className="image1">
                <Image fill src={work_2.src} alt="certificate" />
              </Box>
              <Typography variant="caption">Kịch bản dựng Graphic Video</Typography>
              <Link
                target="_blank"
                href="https://www.tiktok.com/@aperotech?lang=vi-VN"
                sx={{
                  fontWeight: 700,
                  marginTop: '1vw',
                  color: '#1A3C6D',
                  textDecorationColor: '#1A3C6D'
                }}
              >
                Link kênh TikTok công ty
              </Link>
              <Link
                target="_blank"
                href="https://www.facebook.com/aperogroup/videos/637741261694399"
                sx={{
                  fontWeight: 700,
                  marginTop: '1vw',
                  color: '#1A3C6D',
                  textDecorationColor: '#1A3C6D'
                }}
              >
                Link video Year End Party
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    );
};

export default Page6;
