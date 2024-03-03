import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import Image from 'next/image';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import accumulation_1 from 'public/accumulation_1.png';
import { makeStyles } from 'tss-react/mui';

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

const Page1 = () => {
    const { classes } = useStyles();
    return (
        <Box className={classes.wrapperPages}>
            <Box className="page">
                <Box className={classes.wrapperImage}>
                    <Image fill src={accumulation_1.src} alt="certificate" />
                </Box>
            </Box>
            <Box className="page">
                <Box className="wrapperContent">
                    <Box className="info">
                    <Typography variant="h2">HOẠT ĐỘNG NGOẠI KHÓA</Typography>
                    <Divider />
                    <ul>
                        <li>Cộng tác viên truyền thông tuần lễ thời trang VIBFW năm 2019</li>
                        <li>Cộng tác viên chương trình trào Tân sinh viên viện AEP (NEU) năm 2020</li>
                        <li>Đại sứ truyền thông cuộc thi Future Business Analyst mùa 2 (RMIT) năm 2022</li>
                        <li><strong>Top 15 Taste The Future 2022</strong> (Mondelez)</li>
                        <li>Tham gia một vài cuộc thi và chương trình tìm kiếm ứng viên tài năng khác</li>
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
