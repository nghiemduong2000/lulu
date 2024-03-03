import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import Image from 'next/image';
import { makeStyles } from 'tss-react/mui';
import accumulation_5 from 'public/accumulation_5.png';
import accumulation_6 from 'public/accumulation_6.png';
import accumulation_7 from 'public/accumulation_7.png';
import accumulation_8 from 'public/accumulation_8.png';
import accumulation_9 from 'public/accumulation_9.png';

const useStyles = makeStyles()(() => ({
  wrapperPages: {
    width: '100%',
    display: 'flex',
    letterSpacing: '0.15px',
    '.page': {
        width: '50%',
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        ':nth-of-type(1)': {
            padding: '0 4vw 0 5.5vw',
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
            '.image, .image2': {
                width: '65%',
                margin: '0.6vw 0 0.5vw',
                position: 'relative',
                aspectRatio: '92 / 68',
            },
        },
        ':nth-of-type(2)': {
          padding: '0 6vw 0 3vw',
          '& .MuiTypography-h4': {
            fontWeight: 700,
            fontSize: '0.8vw',
            color: '#231F20',
            maxWidth: '25vw',
          },
          '.image3, .image4, .image5': {
              width: '100%',
              position: 'relative',
              aspectRatio: '92 / 68',
          },
          '& .MuiTypography-caption': {
            fontWeight: 400,
            fontSize: '0.7vw',
            marginTop: '0.5vw',
            color: '#231F20',
            lineHeight: '0.8vw',
            display: 'inline-block',
          },
          '.section': {
            gap: '0.6vw',
            display: 'flex',
            alignItems: 'center',
            '.wrapperImage .MuiTypography-caption': {
              fontWeight: 700,
              fontSize: '0.65vw',
              marginTop: '0.3vw',
              textAlign: 'center',
            },
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
            <Typography variant="h3">Những cuộc thi giúp mình tìm thấy những đồng đội tuyệt vời, học được cách chủ động và làm việc đội nhóm hiệu quả hơn.</Typography>
            <Box className="image">
              <Image fill src={accumulation_5.src} alt="certificate" />
            </Box>
            <Typography variant="caption">Lu đã từng là một phần của Taste The Future</Typography>
            <Box className="image2">
              <Image fill src={accumulation_6.src} alt="certificate" />
            </Box>
            <Typography variant="caption">Top 20 cuộc thi Marketing Big Day (PTIT)</Typography>
          </Box>
          <Box className="page">
            <Box width="100%">
              <Typography variant="h4">Mình có thể không đạt thành tích cao nhất nhưng mình sẽ là phiên bản tốt hơn của chính mình mỗi ngày...</Typography>
            </Box>
            <Box className="section">
              <Box flex="60%">
                <Typography variant="caption">Các cuộc thi Marketing cho sinh viên hay đặc biệt hơn là các chương trình Management Trainee của các tập đoàn lớn giúp mình nhận ra mình còn thiếu sót những gì và cần nỗ lực ra sao!</Typography>
                <Typography variant="caption">Mình học được rất nhiều kỹ năng phải kể đến như Problem Solving, Design Thinking, Time Management...</Typography>
              </Box>
              <Box flex="40%" className="wrapperImage">
                <Box className="image3">
                  <Image fill src={accumulation_7.src} alt="certificate" /> 
                </Box>
                <Typography variant="caption">NielsenlQ trận chiến khốc liệt</Typography>
              </Box>
            </Box>
            <Box className="section">
              <Box flex="45%" className="wrapperImage">
                <Box className="image4">
                  <Image fill src={accumulation_8.src} alt="certificate" />
                </Box>
                <Typography variant="caption">Mình dừng chân tại round 3 UFLP 2023</Typography>
              </Box>
              <Box flex="55%">
                <Typography variant="caption">Mình nhận ra sự phù hợp cũng rất quan trọng, vì vậy mình dành thời gian nghiên cứu trước về các tập đoàn, lĩnh vực kinh doanh, bộ máy...vv. Dù mình sinh sống ở thành phố Hà Nội nhưng luôn muốn thử sức những chương trình tại thành phố Hồ Chí Minh. </Typography>
                <Typography variant="caption">Khoảng cách địa lý không nên là rào cản mà sẽ là động lực để chúng mình chinh phục!</Typography>
              </Box>
            </Box>
            <Box className="section">
              <Box flex="60%">
                <Typography variant="caption">Khoảng cách giữa lý thuyết và thực tế rất lớn vì vậy chúng mình luôn cố gắng tạo ra mô hình và đi khảo sát thu thập insight thực tế. </Typography>
              </Box>
              <Box flex="40%" className="wrapperImage">
                <Box className="image5">
                  <Image fill src={accumulation_9.src} alt="certificate" />
                </Box>
                <Typography variant="caption">Mình phỏng vấn sản phẩm mẫu với người tiêu dùng</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
    );
};

export default Page3;
