import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import Image from 'next/image';
import Link from '@mui/material/Link';
import { makeStyles } from 'tss-react/mui';
import devotion_2 from 'public/devotion_2.png';
import devotion_3 from 'public/devotion_3.png';
import devotion_4 from 'public/devotion_4.png';

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
                    fontSize: '1.3vw',
                    color: '#623E23',
                },
                '& > .MuiTypography-caption': {
                    fontWeight: 700,
                    fontSize: '0.8vw',
                    color: '#231F20',
                },
                '& > .MuiTypography-body1': {
                    fontWeight: 400,
                    fontSize: '0.8vw',
                    lineHeight: '1vw',
                    color: '#231F20',
                    marginBottom: '0.8vw',
                },
                '.image': {
                    width: '100%',
                    margin: '1vw 0 0.5vw',
                    position: 'relative',
                    aspectRatio: '61 / 29',
                },
                '.link': {
                    wordBreak: 'break-all',
                    '.MuiTypography-h3': {
                        fontSize: '0.8vw',
                        lineHeight: '1vw',
                        wordBreak: 'break-all',
                    }
                }
            },
            ':nth-of-type(2)': {
                padding: '0 6vw 0 3vw',
                '.image2, .image3': {
                    width: '70%',
                    position: 'relative',
                    aspectRatio: '92 / 68',
                },
                '& > .MuiTypography-caption': {
                    margin: '1.5vw 0',
                    maxWidth: '60%',
                    fontWeight: 700,
                    lineHeight: '1vw',
                    fontSize: '0.8vw',
                    color: '#231F20',
                    textAlign: 'center',
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
                <Typography variant="h3">Một trong những điều ý nghĩa nhất tôi đã làm thời sinh viên...</Typography>
                <Box className="image">
                    <Image fill src={devotion_2.src} alt="certificate" />
                </Box>
                <Typography variant="caption">Bài báo nghiên cứu được đăng năm 2022</Typography>
                <Typography variant="body1">Mình đã liên hệ gửi bài và làm việc với Báo Công Thương (một trong số những tờ báo về Kinh tế uy tín nhất và trực thuộc bộ Công Thương Việt Nam). Bài báo luôn thuộc Top 1 tìm kiếm chủ đề Tác động của công nghệ AR trên Google Search. Dù còn nhiều điều thiếu sót nhưng đây là một sự nỗ lực rất lớn của nhóm trong điều kiện thời gian đó. Mình đã có hoàn thiện kỹ năng khảo sát, thu thập và phân tích mẫu, kỹ năng phản biện.</Typography>
                <Typography variant="body1">Tác phẩm nghiên cứu được thực hiện bởi nhóm nghiên cứu, tuy nhiên phần viết và đăng tải tại báo Công Thương được tôi biên soạn và thực hiện độc lập. Tuy nhiên, kết quả đạt được còn nhờ sự hướng dẫn của người thầy ưu tú TS. Nguyễn Đình Toàn và các người bạn cộng tác cùng tôi. Rất biết ơn chúng ta đã nỗ lực hoàn thiện bài nghiên cứu trong đại dịch COVID 19 (Bài nghiên cứu thực hiện vào tháng 10 năm 2021).</Typography>
                <Box className="link">
                    <Typography variant="h3">
                        <strong>Truy cập bài báo tại: </strong>
                        <Link target="_blank" href="https://tapchicongthuong.vn/bai-viet/tac-dong-cua-cong-nghe-thuc-te-tang-cuong-ar-toi-muc-do-bao-mat-va-tien-ich-tren-cac-nen-tang-ban-hang-truc-tuyen-tai-viet-nam-hien-nay-87080.htm">
                        https://tapchicongthuong.vn/bai-viet/tac-dong-cua-cong-nghe-thuc-te-tang-cuong-ar-toi-muc-do-bao-mat-va-tien-ich-tren-cac-nen-tang-ban-hang-truc-tuyen-tai-viet-nam-hien-nay-87080.htm
                        </Link>
                    </Typography>
                </Box>
            </Box>
            <Box className="page">
                <Box className="image2">
                    <Image fill src={devotion_3.src} alt="certificate" />
                </Box>
                <Typography variant="caption">Giải nhì sinh viên NCKH cấp viện và cấp trường đại học Kinh Tế Quốc Dân</Typography>
                <Box className="image3">
                    <Image fill src={devotion_4.src} alt="certificate" />
                </Box>
            </Box>
        </Box>
    );
};

export default Page2;
