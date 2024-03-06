import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import Image from 'next/image';
import Divider from '@mui/material/Divider';
import { makeStyles } from 'tss-react/mui';
import work_1 from 'public/work/3_1.png';
import work_2 from 'public/work/3_2.png';
import work_3 from 'public/work/3_3.png';
import work_4 from 'public/work/3_4.png';
import Link from '@mui/material/Link';
import { roboto_condensed } from '@/app/fonts';
import VideoPlayer from '@/components/VideoPlayer';

const useStyles = makeStyles()(() => ({
    wrapperPages: {
        display: 'flex',
        fontFamily: roboto_condensed.style.fontFamily,
        '.page': {
            width: '50%',
            display: 'flex',
            lineHeight: '14px',
            position: 'relative',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            '.MuiTypography-h3': {
                fontSize: '1vw',
                fontWeight: 700,
                color: '#7D5932',
                marginBottom: '0.5vw',
            },
            ':nth-of-type(1)': {
                display: 'flex',
                padding: '0 2vw 0 6vw',
                flexDirection: 'column',
                '.MuiDivider-root': {
                    width: '20%',
                    margin: '1vw 0',
                    borderWidth: '0.2vw',
                    borderColor: '#7D5932',
                },
                '.MuiTypography-h2': {
                    fontWeight: 700,
                    fontSize: '1.8vw',
                    lineHeight: '2vw',
                    color: '#623E23',
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
                '.MuiTypography-subtitle1': {
                    fontSize: '0.8vw',
                    fontWeight: 400,
                    color: '#3E2A1E',
                },
            },
            ':nth-of-type(2)': {
                padding: '0 6vw 0 4vw',
                alignItems: 'flex-start',
                '.MuiDivider-root': {
                    width: '20%',
                    borderStyle: 'dashed',
                    margin: '0.5vw 0 4vw',
                    borderColor: '#7D5932',
                    borderBottomWidth: '0.4vw',
                },
                '.image1': {
                    width: '100%',
                    position: 'relative',
                    aspectRatio: '163 / 123',
                },
                '.image2': {
                    width: '100%',
                    position: 'relative',
                    aspectRatio: '338 / 493',
                },
                '.video': {
                    width: '100%',
                    video: {
                        width: '100%',
                    },
                },
                '.image3': {
                    width: '60%',
                    position: 'relative',
                    aspectRatio: '493 / 317',
                },
                '.image4': {
                    width: '30%',
                    position: 'relative',
                    aspectRatio: '1 / 1',
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

const Page4 = () => {
    const { classes } = useStyles();
    return (
        <Box className={classes.wrapperPages}>
            <Box className="page">
                <Typography variant="h2">KINH NGHIỆM</Typography>
                <Divider />
                <Box>
                    <Typography variant="h3">Project Manager</Typography>
                    <Typography variant="subtitle1">Stormlab Agency | Tháng 9/2023 - Tháng 11/2023</Typography>
                    <ul>
                        <li>Đấu thầu các dự án sản xuất video thương mại, xây dựng hệ thống Marketing tổng thể cho các doanh nghiệp SMEs</li>
                        <li>Thiết kế các dự án phù hợp theo ATL, BTL</li>
                        <li>Phát triển kênh bán hàng Shopee và TikTok Livestream</li>
                    </ul>
                </Box>
                <Box>
                    <Typography variant="h3">Content Creator</Typography>
                    <Typography variant="subtitle1">Stormlab Agency | Tháng 7/2023 - Tháng 9/2023</Typography>
                    <ul>
                        <li>Lên ý tưởng nội dung, kịch bản nấu ăn cho Master Chef Việt Nam Nguyễn Văn Tú đạt <strong>20k followers</strong> trên TikTok trong 06 ngày, video đạt trung bình <strong>100k views</strong></li>
                        <li>Đo lường các chỉ số CTA, CTR</li>
                        <li>Stylish, leader điều phối các buổi quay và quản lý hậu kỳ</li>
                    </ul>
                </Box>
            </Box>
            <Box className="page">
                <Typography variant="h3">Phân tích thị trường, xây dựng hình tượng</Typography>
                <Box gap="12px" display="flex">
                    <Box flex="1" gap="12px" display="flex" alignItems="center" flexDirection="column">
                        <Box className="image1">
                            <Image fill src={work_1.src} alt="certificate" />
                        </Box>
                        <Typography
                            variant='body1'
                            sx={{ fontSize: '1vw', color: '#1A3C6D' }}
                        >
                            <Link
                                target="_blank"
                                href="https://www.tiktok.com/@vatuironchef?lang=vi-VN"
                                sx={{
                                    fontWeight: 700,
                                    color: '#1A3C6D',
                                    textDecorationColor: '#1A3C6D'
                                }}
                            >
                                Link kênh
                            </Link>
                            &nbsp;01
                        </Typography>
                        <Typography
                            variant='body1'
                            sx={{ fontSize: '1vw', color: '#1A3C6D' }}
                        >
                            <Link
                                target="_blank"
                                href="https://www.tiktok.com/@cookchit?lang=vi-VN"
                                sx={{
                                    fontWeight: 700,
                                    color: '#1A3C6D',
                                    textDecorationColor: '#1A3C6D'
                                }}
                            >
                                Link kênh
                            </Link>
                            &nbsp;02
                        </Typography>
                    </Box>
                    <Box flex="1" gap="12px" display="flex" alignItems="center" flexDirection="column">
                        <Box className="image2">
                            <Image fill src={work_2.src} alt="certificate" />
                        </Box>
                        <Link
                            target="_blank"
                            href="https://www.tiktok.com/@vatuironchef/video/7270166571178298629?is_from_webapp=1&sender_device=pc&web_id=7203571822884226561"
                            sx={{
                                fontSize: '1vw',
                                fontWeight: 700,
                                color: '#1A3C6D',
                                textDecorationColor: '#1A3C6D'
                            }}
                        >
                            Link video 3 triệu vui
                        </Link>
                    </Box>
                    <Box flex="1">
                        <Box className="video">
                            <VideoPlayer volume={0.1} url="/work/l1.mp4" />
                        </Box>  
                    </Box>
                </Box>
                <Box
                    width="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Box className="image3">
                        <Image fill src={work_3.src} alt="certificate" />
                    </Box>
                    <Box className="image4">
                        <Image fill src={work_4.src} alt="certificate" />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Page4;
