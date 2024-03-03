import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import Image from 'next/image';
import { makeStyles } from 'tss-react/mui';
import accumulation_2 from 'public/accumulation_2.png';
import accumulation_3 from 'public/accumulation_3.png';
import accumulation_4 from 'public/accumulation_4.png';

const useStyles = makeStyles()(() => ({
    wrapperPages: {
        width: '100%',
        display: 'flex',
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
                '.image3': {
                    width: '70%',
                    position: 'relative',
                    aspectRatio: '92 / 68',
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
                <Typography variant="h3">Chúng ta không thể quay lại quá khứ nhưng có thể tạo ra những hồi ức tuyệt vời trong khoảng thời gian ấy!</Typography>
                <Box className="image">
                    <Image fill src={accumulation_2.src} alt="certificate" />
                </Box>
                <Typography variant="caption">Cộng tác viên truyền thông tuần lễ thời trang VIBFW năm 2019</Typography>
                <Box className="image2">
                    <Image fill src={accumulation_3.src} alt="certificate" />
                </Box>
                <Typography variant="caption">Đại sứ truyền thông cuộc thi Future Business Analyst mùa 2 (RMIT)</Typography>
            </Box>
            <Box className="page">
                <Box className="image3">
                    <Image fill src={accumulation_4.src} alt="certificate" />
                </Box>
                <Typography variant="caption">Cộng tác viên chương trình trào Tân sinh viên viện AEP (NEU) năm 2020</Typography>
                <Typography variant="body1">Quãng thời gian đại học tưởng chừng sẽ là một thời điểm tuyệt vời để tham gia nhiều hoạt động mới mẻ mà mình luôn mong ngóng. Nhưng phần lớn thời gian đại học của mình bị ảnh hưởng bởi đại dịch Covid 19. Số lượng hoạt động mình tham gia có lẽ không nhiều nhưng đều là những sự cố gắng và tinh thần ham học hỏi của một cô bé mới lớn mong muốn được ngắm nhìn thế giới.</Typography>
                <Typography variant="body1">Đại dịch cũng là cơ hội cho mình có thời gian học tập nhiều hơn, tiếp cận các công nghệ mới như tự học các công cụ thiết kế, làm hiệu ứng...vv. Mình không nghĩ mình đã có một quãng thời gian đại học ấn tượng nhưng mình đã cố gắng tạo ra những giá trị rực rỡ. Mình cũng nhận ra sức khỏe tinh thần và tâm lý học là một thứ vô cùng quan trọng cần chú tâm. Kiểm soát cảm xúc và luôn có trách nhiệm với những việc mình làm là những gì mình được tôi luyện trong thời gian này.</Typography>
            </Box>
        </Box>
    );
};

export default Page2;
