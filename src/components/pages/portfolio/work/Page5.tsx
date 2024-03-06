import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import Image from 'next/image';
import Divider from '@mui/material/Divider';
import { makeStyles } from 'tss-react/mui';
import work_1 from 'public/work/4_1.png';
import work_2 from 'public/work/4_3.png';
import work_3 from 'public/work/4_2.png';
import work_4 from 'public/work/4_5.png';
import work_5 from 'public/work/4_4.png';
import work_6 from 'public/work/4_6.png';
import Link from '@mui/material/Link';
import { roboto_condensed } from '@/app/fonts';

const useStyles = makeStyles()(() => ({
  wrapperPages: {
      width: '100%',
      display: 'flex',
      fontFamily: roboto_condensed.style.fontFamily,
      '.page': {
          width: '50%',
          display: 'flex',
          lineHeight: '14px',
          position: 'relative',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          '.MuiTypography-h3': {
            fontSize: '1vw',
            fontWeight: 700,
            margin: '0.5vw 0',
            color: '#7D5932',
          },
          ':nth-of-type(1)': {
              display: 'flex',
              flexDirection: 'column',
              padding: '0 2vw 0 5vw',
              '& > .MuiTypography-body1': {
                  fontWeight: 400,
                  fontSize: '0.8vw',
                  lineHeight: '1vw',
                  color: '#231F20',
                  marginBottom: '0.8vw',
              },
              '.image1, .image2': {
                  width: '100%',
                  marginBottom: '1vw',
                  position: 'relative',
                  aspectRatio: '570 / 324',
              },
              '.image3': {
                width: '100%',
                marginTop: '2vw',
                position: 'relative',
                aspectRatio: '707 / 247',
            },
              '.link': {
                width: '100%',
                '.MuiLink-root': {
                  fontWeight: 700,
                  fontSize: '1.2vw',
                  color: '#1A3C6D',
                },
              },
          },
          ':nth-of-type(2)': {
              padding: '0 5vw 0 3vw',
              alignItems: 'flex-start',
              '.MuiDivider-root': {
                  width: '20%',
                  borderStyle: 'dashed',
                  margin: '0.5vw 0 4vw',
                  borderColor: '#7D5932',
                  borderBottomWidth: '0.4vw',
              },
              '.image4, .image5': {
                  flex: 1,
                  position: 'relative',
                  aspectRatio: '1 / 1',
              },
              '& > .MuiTypography-h2': {
                  fontWeight: 700,
                  fontSize: '1.8vw',
                  lineHeight: '2vw',
                  color: '#623E23',
              },
              '& > .MuiTypography-body1': {
                  fontWeight: 400,
                  fontSize: '0.8vw',
                  lineHeight: '1vw',
                  color: '#231F20',
                  marginBottom: '0.8vw',
              },
              '.draftPaper': {
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                backgroundSize: 'cover',
                aspectRatio: '476 / 334',
                justifyContent: 'center',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${work_6.src})`,
              },
              ul: {
                li: {
                  fontSize: '0.8vw',
                  marginLeft: '1.4vw',
                  color: '#3E2A1E',
                  lineHeight: '1.1vw',
                  fontFamily: roboto_condensed.style.fontFamily,
                },
              },
          },
      },
  },
}));

const Page5 = () => {
    const { classes } = useStyles();
    return (
        <Box className={classes.wrapperPages}>
            <Box className="page">
                <Box gap="1vw" width="100%" display="flex">
                  <Box flex="1" display="flex" alignItems="center" flexDirection="column">
                      <Typography variant="h3">Dựng Storyboard</Typography>
                      <Box className="image1">
                          <Image fill src={work_1.src} alt="certificate" />
                      </Box>
                      <Link
                        target="_blank"
                        href="https://drive.google.com/file/d/1-pGufyl7btrQtnT9cab1vGhCP8Zsi5xb/view?usp=sharing"
                        sx={{
                          fontWeight: 700,
                          color: '#1A3C6D',
                          textDecorationColor: '#1A3C6D'
                        }}
                      >
                          Drive storyboard sample
                      </Link>
                  </Box>
                  <Box flex="1" display="flex" alignItems="center" flexDirection="column">
                      <Typography variant="h3">Kịch bản quay</Typography>
                      <Box className="image2">
                          <Image fill src={work_2.src} alt="certificate" />
                      </Box>
                      <Link
                        target="_blank"
                        href="https://docs.google.com/document/d/17k-KB_8gc6RRGxhHOmRC10t4DLZ0f-p7KcP7vfIlThw/edit?usp=sharing"
                        sx={{
                          fontWeight: 700,
                          color: '#1A3C6D',
                          textDecorationColor: '#1A3C6D'
                        }}
                      >
                          Drive KB sample
                      </Link>
                  </Box>
                </Box>
                <Box className="image3">
                    <Image fill src={work_3.src} alt="certificate" />
                </Box>
                <Typography variant="h3">Content Plan Tracker</Typography>
            </Box>
            <Box className="page">
                <Typography variant="h2">STORMLAB AGENCY</Typography>
                <Divider />
                <Box width="100%" gap="2vw" display="flex" alignItems="center">
                    <Box className="image4">
                        <Image fill src={work_4.src} alt="certificate" />
                    </Box>
                    <Box className="draftPaper">
                        <ul>
                            <li>Thảo luận với VJ nguyên liệu và cách chế biến</li>
                            <li>Nghiên cứu món ăn, đặt mua nguyên liệu, đồ trang trí</li>
                            <li>Xử lý hậu kỳ</li>
                        </ul>
                    </Box>
                </Box>
                <Box width="100%" gap="2vw" display="flex" alignItems="center">
                    <Box className="draftPaper">
                        <ul>
                            <li>Phối hợp với quay phim điều chỉnh bố cục</li>
                            <li>Hỗ trợ chuẩn bị và xử lý tiền cảnh</li>
                            <li>Viết kịch bản dựng</li>
                        </ul>
                    </Box>
                    <Box className="image5">
                        <Image fill src={work_5.src} alt="certificate" />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Page5;
