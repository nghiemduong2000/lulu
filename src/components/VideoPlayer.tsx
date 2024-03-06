import Box from '@mui/material/Box';
import React, { FC, useState } from 'react';
import ReactPlayer from 'react-player';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { makeStyles } from 'tss-react/mui';
import { IconButton } from '@mui/material';

const useStyles = makeStyles()(() => ({
    wrapperPlayer: {
        width: '100%',
        position: 'relative',
        '.controlButton': {
            top: '50%',
            left: '50%',
            opacity: '0',
            position: 'absolute',
            visibility: 'hidden',
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.2s ease-in-out',
            '.MuiSvgIcon-root': {
                fontSize: '4vw',
            },
        },
        ':hover': {
            '.controlButton': {
                opacity: '1',
                visibility: 'visible',
            },
        },
    },
}));

const VideoPlayer: FC<{ url: string, volume?: number }> = ({ url, volume }) => {
    const [isPlay, setIsPlay] = useState(false);
    const { classes } = useStyles();

    const handlePlay = () => {
        setIsPlay(true);
    };

    const handlePause = () => {
        setIsPlay(false);
    };

    return (
        <Box className={classes.wrapperPlayer}>
            <ReactPlayer
                url={url}
                width="100%"
                height="100%"
                volume={volume}
                playing={isPlay}
                onEnded={handlePause}
            />
            {isPlay ? (
                <IconButton className="controlButton" onClick={handlePause}>
                    <PauseCircleIcon />
                </IconButton>
            ) : (
                <IconButton className="controlButton" onClick={handlePlay}>
                    <PlayCircleIcon />
                </IconButton>
            )}
        </Box>
    );
}

export default VideoPlayer