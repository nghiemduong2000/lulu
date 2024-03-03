import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import Image from 'next/image';
import Divider from '@mui/material/Divider';
import { makeStyles } from 'tss-react/mui';
import work_1 from 'public/work_1.png';
import work_2 from 'public/work_2.png';
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

const Page4 = () => {
    const { classes } = useStyles();
    return (
        <Box className={classes.wrapperPages}>
            <Box className="page">
                <Box className="wrapperContent">
                    <Typography variant="h2">KINH NGHIỆM</Typography>
                    <Divider />
                    <Box>
                        <Typography variant="h6">Project Manager</Typography>
                        <Typography variant="subtitle1">Stormlab Agency | Tháng 9/2023 - Tháng 11/2023</Typography>
                        <ul>
                            <li>Đấu thầu các dự án sản xuất video thương mại, xây dựng hệ thống Marketing tổng thể cho các doanh nghiệp SMEs</li>
                            <li>Thiết kế các dự án phù hợp theo ATL, BTL</li>
                            <li>Phát triển kênh bán hàng Shopee và TikTok Livestream</li>
                        </ul>
                    </Box>
                    <Box>
                        <Typography variant="h6">Content Creator</Typography>
                        <Typography variant="subtitle1">Stormlab Agency | Tháng 7/2023 - Tháng 9/2023</Typography>
                        <ul>
                            <li>Lên ý tưởng nội dung, kịch bản nấu ăn cho Master Chef Việt Nam Nguyễn Văn Tú đạt <strong>20k followers</strong> trên TikTok trong 06 ngày, video đạt trung bình <strong>100k views</strong></li>
                            <li>Đo lường các chỉ số CTA, CTR</li>
                            <li>Stylish, leader điều phối các buổi quay và quản lý hậu kỳ</li>
                        </ul>
                    </Box>
                </Box>
            </Box>
            <Box className="page">
                <Box className="wrapperContent">
                    <Typography variant="h5">Phân tích thị trường, xây dựng hình tượng</Typography>
                    <Box>
                        <Box>
                            <Box className={classes.wrapperImage}>
                                <Image fill src={work_1.src} alt="certificate" />
                            </Box>
                            <Link target="_blank" href="https://www.tiktok.com/@vatuironchef?lang=vi-VN">
                                Link kênh 01
                            </Link>
                            <Link target="_blank" href="https://www.tiktok.com/@cookchit?lang=vi-VN">
                                Link kênh 02
                            </Link>
                        </Box>
                        <Box>
                            <Box className={classes.wrapperImage}>
                                <Image fill src={work_1.src} alt="certificate" />
                            </Box>
                            <Link target="_blank" href="https://www.tiktok.com/@vatuironchef/video/7270166571178298629?is_from_webapp=1&sender_device=pc&web_id=7203571822884226561">
                                Link video 3 triệu vui
                            </Link>
                        </Box>
                        <Box>
                            <Box className={classes.wrapperImage}>
                                <Image fill src={work_1.src} alt="certificate" />
                            </Box>  
                        </Box>
                    </Box>
                    <Box>
                        <Box className={classes.wrapperImage}>
                            <Image fill src={work_1.src} alt="certificate" />
                        </Box>
                        <Box className={classes.wrapperImage}>
                            <Image fill src={work_1.src} alt="certificate" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Page4;
