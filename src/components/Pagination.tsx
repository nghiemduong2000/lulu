import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import leftArrow from 'public/left-arrow.svg';
import rightArrow from 'public/right-arrow.svg';
import Image from "next/image";
import { FC } from "react";
import { makeStyles } from "tss-react/mui";

interface IPagination {
    totalPage: number;
    currentPage: number;
    handlePage: (newPage: number) => void;
}

const useStyles = makeStyles()(() => ({
    wrapper: {
        top: 0,
        zIndex: 1,
        gap: '1.5vw',
        left: '50%',
        display: 'flex',
        padding: '14px 12px',
        position: 'absolute',
        alignItems: 'center',
        borderRadius: '36px',
        transform: 'translateX(-50%)',
        backgroundColor: '#E7DFD8AB',
        '.MuiIconButton-root': {
            flex: 1,
            width: '5vw',
            position: 'relative',
            aspectRatio: '5 / 4',
            '&.Mui-disabled': {
                opacity: '0.5',
                cursor: 'no-drop',
            },
        },
        '.MuiTypography-body1': {
            flex: 1,
            fontSize: '2.5vw',
            color: '#2D231D',
            whiteSpace: 'nowrap',
        },
    },
}))

const Pagination: FC<IPagination> = ({ currentPage, totalPage, handlePage }) => {
    const { classes } = useStyles();

    const onNext = () => {
        if (currentPage === totalPage) {
            return;
        }
        handlePage(currentPage + 1);
    };
    const onPrevious = () => {
        if (currentPage === 1) {
            return;
        }
        handlePage(currentPage - 1);
    }

    return (
        <Box className={classes.wrapper}>
            <IconButton onClick={onPrevious} disabled={currentPage === 1}>
                <Image fill src={leftArrow} alt="Left arrow" />
            </IconButton>
            <Typography variant="body1">{`${currentPage}/${totalPage}`}</Typography>
            <IconButton onClick={onNext} disabled={currentPage === totalPage}>
                <Image fill src={rightArrow} alt="Left arrow" />
            </IconButton>
        </Box>
    )
}

export default Pagination;