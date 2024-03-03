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

const Page5 = () => {
    const { classes } = useStyles();
    return (
        <Box className={classes.wrapperPages}>
            <Box className="page">
                <Box className="wrapperContent">
                    <Typography variant="h5">Dựng Storyboard</Typography>
                    <Box className={classes.wrapperImage}>
                        <Image fill src={work_1.src} alt="certificate" />
                    </Box>
                    <Link target="_blank" href="https://drive.google.com/file/d/1-pGufyl7btrQtnT9cab1vGhCP8Zsi5xb/view?usp=sharing">
                        Drive storyboard sample
                    </Link>
                </Box>
                <Box className="wrapperContent">
                    <Typography variant="h5">Kịch bản quay</Typography>
                    <Box className={classes.wrapperImage}>
                        <Image fill src={work_1.src} alt="certificate" />
                    </Box>
                    <Link target="_blank" href="https://docs.google.com/document/d/17k-KB_8gc6RRGxhHOmRC10t4DLZ0f-p7KcP7vfIlThw/edit?usp=sharing">
                        Drive KB sample
                    </Link>
                </Box>
                <Box className={classes.wrapperImage}>
                    <Image fill src={work_1.src} alt="certificate" />
                </Box>
                <Typography variant="h5">Content Plan Tracker</Typography>
            </Box>
            <Box className="page">
                <Typography variant="h2">STORMLAB AGENCY</Typography>
                <Divider />
                <Box>
                    <Box className={classes.wrapperImage}>
                        <Image fill src={work_1.src} alt="certificate" />
                    </Box>
                    <Box>
                        <ul>
                            <li>Thảo luận với VJ nguyên liệu và cách chế biến</li>
                            <li>Nghiên cứu món ăn, đặt mua nguyên liệu, đồ trang trí</li>
                            <li>Xử lý hậu kỳ</li>
                        </ul>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <ul>
                            <li>Phối hợp với quay phim điều chỉnh bố cục</li>
                            <li>Hỗ trợ chuẩn bị và xử lý tiền cảnh</li>
                            <li>Viết kịch bản dựng</li>
                        </ul>
                    </Box>
                    <Box className={classes.wrapperImage}>
                        <Image fill src={work_1.src} alt="certificate" />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Page5;
