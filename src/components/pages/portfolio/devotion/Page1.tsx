import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import Image from 'next/image';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import { makeStyles } from 'tss-react/mui';
import devotion_1 from 'public/devotion_1.png';

const useStyles = makeStyles()(() => ({
    wrapperPages: {
        width: '100%',
        display: 'flex',
        '.page': {
            flex: 1,
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            ':nth-of-type(1)': {
                flexDirection: 'column',
                '.MuiTypography-caption': {
                    maxWidth: '50%',
                    fontWeight: 700,
                    lineHeight: '1vw',
                    fontSize: '0.8vw',
                    color: '#231F20',
                    textAlign: 'center',
                },
            },
            ':nth-of-type(2)': {
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
                    },
                },
            },
        },
    },
    wrapperImage: {
        width: '72%',
        position: 'relative',
        aspectRatio: '1 / 1',
    },
}));

const Page1 = () => {
    const { classes } = useStyles();
    return (
        <Box className={classes.wrapperPages}>
            <Box className="page">
                <Box className={classes.wrapperImage}>
                    <Image fill src={devotion_1.src} alt="certificate" />
                </Box>
                <Typography variant="caption">Lu tham gia làm diễn giả tại hội thảo quốc tế ICSEED 2022</Typography>
            </Box>
            <Box className="page">
                <Box className="wrapperContent">
                    <Box className="info">
                        <Typography variant="h2">Thành tích</Typography>
                        <Divider />
                        <ul>
                        <li>Tác giả bài báo nghiên cứu khoa học công nghệ AR báo Công Thương 2022</li>
                        <li>Tác giả tạp chí nghiên cứu khoa học dự hội thảo quốc tế ICSEED 2022</li>
                        <li>Học bổng sinh viên xuất sắc Vietcombank 2022</li>
                        <li>Giải nhì nghiên cứu khoa học sinh viên cấp viện và cấp đại học Kinh tế Quốc Dân</li>
                        </ul>
                    </Box>
                    <Box className="link">
                        <Typography variant="h3">LINK DRIVE GIẤY TỜ</Typography>
                        <Link target="_blank" href="https://drive.google.com/drive/folders/16kPCkaDpVyHMuE_YiOMVNQP1WehJyt1l?usp=sharing">
                        https://drive.google.com/drive/folders/16kPCkaDpVyHMuE_YiOMVNQP1WehJyt1l?usp=sharing
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Page1;
