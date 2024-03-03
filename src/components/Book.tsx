'use client';

import Box from "@mui/material/Box";
import { makeStyles } from "tss-react/mui";
import { FC, ReactNode, useState } from "react";
import Image from "next/image";
import book from 'public/book.png';
import content_title from 'public/content_title.png';
import Typography from "@mui/material/Typography";
import { useRouter } from "@/navigation";
import { AppRouteEnum } from "@/enum";
import IconButton from "@mui/material/IconButton";
import Pagination from "./Pagination";

const useStyles = makeStyles()(({ breakpoints }) => ({
    wrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapperBook: {
        width: '75%',
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        aspectRatio: '530 / 329',
        justifyContent: 'center',
        img: {
            objectPosition: '40% 0%',
            [breakpoints.up('md')]: {
                objectPosition: 'top',
            }
        },
        '.closeButton': {
            top: '2vw',
            right: '4vw',
            width: '4.5vw',
            height: '4.5vw',
            position: 'absolute',
        },
        '.background': {
            width: '100%',
            height: '100%',
            '.contentTitle': {
                zIndex: 1,
                width: '20%',
                position: 'relative',
                aspectRatio: '100 / 73',
                transform: 'translateY(5%) rotate(-4.5deg)',
                '.MuiTypography-h2': {
                    left: '50%',
                    bottom: '17%',
                    fontSize: '1.5vw',
                    fontWeight: 700,
                    color: '#E7DFD8',
                    whiteSpace: 'nowrap',
                    position: 'absolute',
                    textTransform: 'uppercase',
                    transform: 'translateX(-50%)',
                },
            },
        },
    },
}));

interface IBook {
    title?: string;
    pages: ReactNode[];
}

const Book: FC<IBook> = ({ title, pages }) => {
    const router = useRouter();
    const { classes } = useStyles();

    const [currentPage, setCurrentPage] = useState(1);

    const redirect = () => {
        router.push(AppRouteEnum.Portfolio);
    };

    const handlePage = (newPage: number) => {
        setCurrentPage(newPage);
    };

    return (
        <Box className={classes.wrapper}>
            <Box className={classes.wrapperBook}>
                <Box className="background">
                    {title && currentPage === 1 && (
                        <Box className="contentTitle">
                            <Image
                                fill
                                alt="wood board"
                                src={content_title.src}
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                            <Typography variant="h2">{title}</Typography>
                        </Box>
                    )}
                    <Image
                        fill
                        alt="book"
                        src={book.src}
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </Box>
                {pages.length > 1 && <Pagination currentPage={currentPage} totalPage={pages.length} handlePage={handlePage} />}
                <IconButton className="closeButton" onClick={redirect} sx={{ zIndex: 1 }} />
                <Box position="absolute" display="flex" top="0px" left="0px" width="100%" height="100%">
                    {pages[currentPage - 1]}
                </Box>
            </Box>
        </Box>
    );
};

export default Book;
