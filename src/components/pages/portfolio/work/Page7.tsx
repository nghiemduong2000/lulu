import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import Divider from '@mui/material/Divider';
import { makeStyles } from 'tss-react/mui';
import { roboto_condensed } from "@/app/fonts";

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
      flexDirection: 'column',
      justifyContent: 'center',
      '.MuiTypography-h2': {
        fontSize: '1.9vw',
        fontWeight: 700,
        color: '#623E23',
        textTransform: 'uppercase',
      },
      '.MuiDivider-root': {
        width: '20%',
        margin: '1vw 0',
        borderWidth: '0.2vw',
        borderColor: '#7D5932',
      },
      '.info': {
        display: 'flex',
        marginTop: '2vw',
        flexDirection: 'column',
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
      },
      ':nth-of-type(1)': {
        paddingLeft: '6vw',
      },
      ':nth-of-type(2)': {
        padding: '0 4vw',
        
      }
    },
  },
  wrapperImage: {
    width: '84%',
    position: 'relative',
    aspectRatio: '1 / 1',
  },
}));

const Page7 = () => {
    const { classes } = useStyles();
    return (
      <Box className={classes.wrapperPages}>
        <Box className="page">
          <Typography variant="h2">CÁC CÔNG VIỆC PART-TIME</Typography>
          <Divider />
          <Box className="info">
            <Typography variant="h3">Account Planner</Typography>
            <Typography variant="subtitle1">Be Media Entertainment | 2023</Typography>
            <ul>
              <li>Pitching dự án</li>
              <li>Soạn thảo hồ sơ, ký kết hợp đồng</li>
              <li>Booking model, sắp xếp lịch quay, data khách hàng</li>
            </ul>
          </Box>
          <Box className="info">
            <Typography variant="h3">SEO content Part-time</Typography>
            <Typography variant="subtitle1">Nhanh.vn | 2022</Typography>
            <ul>
              <li>Viết bài chuẩn SEO</li>
              <li>Đàm phán, lên chiến lược và định hướng bài viết với khách hàng B2B</li>
            </ul>
          </Box>
        </Box>
        <Box className="page">
          <Box className="info">
            <Typography variant="h3">Sales Executive</Typography>
            <Typography variant="subtitle1">Aloha studio | 2020</Typography>
            <ul>
              <li>Tăng 1% ti lệ khách hàng mới trong tuần đầu tiên</li>
              <li>Ký kết và chăm sóc hỗ trợ khách hàng với gói dịch vụ giá trị cao ( 40 - 100 triệu)</li>
            </ul>
          </Box>
          <Box className="info">
            <Typography variant="h3">Content Marketing</Typography>
            <Typography variant="subtitle1">Nang Fashion Studio | 2019</Typography>
            <ul>
              <li>Bài tương tác tự nhiên đạt 5000 lượt thích không chạy ads trên page Facebook</li>
              <li>Viết bài SEO</li>
              <li>Phát triển và bán hàng kênh Instagram</li>
            </ul>
          </Box>
        </Box>
      </Box>
    );
};

export default Page7;
