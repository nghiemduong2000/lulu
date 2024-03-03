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

const Page3 = () => {
    const { classes } = useStyles();
    return (
        <Box className={classes.wrapperPages}>
            <Box className="page">
                <Box>
                    <Box className={classes.wrapperImage}>
                        <Image fill src={work_1.src} alt="certificate" />
                    </Box>
                    <Box className={classes.wrapperImage}>
                        <Image fill src={work_1.src} alt="certificate" />
                    </Box>
                </Box>
                <Typography variant="body1">Trưởng ban tổ chức sự kiện Online và Offline với quy mô 350 người ( 5 nhân sự hỗ trợ, 4 media quay/chụp, 5 cộng tác viên). Sự kiện Tết cổ truyền cho học viên (20 - 30 tuổi). Xây dựng key visual, concept riêng cho sự kiện.</Typography>
                <Link target="_blank" href="https://www.tiktok.com/@duhoc.vxtedu/photo/7322477139247353089?is_from_webapp=1&sender_device=pc&web_id=7203571822884226561">
                    Link chi tiết
                </Link>
            </Box>
            <Box className="page">
                <Box className="wrapperContent">
                    <Typography variant="h2">VXT EDU</Typography>
                    <Divider />
                    <Typography variant="body1">Quản lý và định hướng các tuyến nội dung, báo cáo đo lường hiệu quả (metric).</Typography>
                    <Box className={classes.wrapperImage}>
                        <Image fill src={work_1.src} alt="certificate" />
                    </Box>
                    <Box className={classes.wrapperImage}>
                        <Image fill src={work_1.src} alt="certificate" />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Page3;
