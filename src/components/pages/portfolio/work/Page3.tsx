import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import Image from 'next/image';
import Divider from '@mui/material/Divider';
import { makeStyles } from 'tss-react/mui';
import work_1 from 'public/work/2_1.png';
import work_2 from 'public/work/2_2.png';
import work_3 from 'public/work/2_3.png';
import work_4 from 'public/work/2_4.png';
import Link from '@mui/material/Link';

const useStyles = makeStyles()(() => ({
  wrapperPages: {
      display: 'flex',
      '.page': {
          width: '50%',
          display: 'flex',
          lineHeight: '14px',
          position: 'relative',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          ':nth-of-type(1)': {
              display: 'flex',
              flexDirection: 'column',
              padding: '0 2vw 0 6vw',
              '& > .MuiTypography-body1': {
                  fontWeight: 400,
                  fontSize: '0.8vw',
                  lineHeight: '1vw',
                  color: '#231F20',
                  marginBottom: '0.8vw',
              },
              '.image1, .image2': {
                  flex: 1,
                  position: 'relative',
                  margin: '0.6vw 0 0.5vw',
                  aspectRatio: '132 / 179',
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
              padding: '0 4vw 0 2vw',
              alignItems: 'flex-start',
              '.MuiDivider-root': {
                  width: '20%',
                  borderStyle: 'dashed',
                  margin: '0.5vw 0 4vw',
                  borderColor: '#7D5932',
                  borderBottomWidth: '0.4vw',
              },
              '.image3, .image4': {
                  width: '60%',
                  position: 'relative',
                  aspectRatio: '179 / 82',
              },
              '.image4': {
                marginTop: '1vw',
                alignSelf: 'flex-end',
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
          },
      },
  },
}));

const Page3 = () => {
    const { classes } = useStyles();
    return (
        <Box className={classes.wrapperPages}>
            <Box className="page">
                <Box gap="1vw" width="100%" display="flex" marginBottom="1vw">
                    <Box className="image1">
                        <Image fill src={work_1.src} alt="certificate" />
                    </Box>
                    <Box className="image2">
                        <Image fill src={work_2.src} alt="certificate" />
                    </Box>
                </Box>
                <Typography variant="body1">Hướng dẫn và phát triển content kênh TikTok truyền thông có nhiều bài tương tác gần 1 triệu lượt xem, thu hút data học viên Online TĂNG 10% (doanh nghiệp chưa khai thác data từ social media trước đây).</Typography>
                <Box className="link">
                  <Link target="_blank" href="https://www.tiktok.com/@duhoc.vxtedu/photo/7322477139247353089?is_from_webapp=1&sender_device=pc&web_id=7203571822884226561">
                      Link chi tiết
                  </Link>
                </Box>
            </Box>
            <Box className="page">
                <Typography variant="h2">VXT EDU</Typography>
                <Divider />
                <Typography variant="body1">Quản lý và định hướng các tuyến nội dung, báo cáo đo lường hiệu quả (metric).</Typography>
                <Box className="image3">
                    <Image fill src={work_3.src} alt="certificate" />
                </Box>
                <Box className="image4">
                    <Image fill src={work_4.src} alt="certificate" />
                </Box>
            </Box>
        </Box>
    );
};

export default Page3;
