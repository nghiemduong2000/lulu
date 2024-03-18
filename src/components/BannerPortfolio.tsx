'use client';

import Box from "@mui/material/Box";
import { makeStyles } from "tss-react/mui";
import background from '../../public/portfolio_bg.png';
import { FC, MouseEventHandler, RefObject, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import message from "public/message.svg";
import { Typography } from "@mui/material";
import { roboto_condensed } from "@/app/fonts";
import { AppRouteEnum } from "@/enum";
import { useTranslations } from "next-intl";
import { useRouter } from "@/navigation";

const useStyles = makeStyles()(({ breakpoints }) => ({
  wrapperBanner: {
      overflow: 'auto',
      maxWidth: '100vw',
      maxHeight: '100vh',
      position: 'relative',
    '&::-webkit-scrollbar': {
      width: 0,
      height: 0,
    },
  },
  wrapperImage: {
    minWidth: '100vw',
    minHeight: '100vh',
    position: 'relative',
    aspectRatio: '16 / 9',
    '& > .message': {
        zIndex: 1,
        width: '200px',
        display: 'flex',
        userDrag: 'none',
        cursor: 'pointer',
        position: 'absolute',
        alignItems: 'center',
        aspectRatio: '200 / 71',
        justifyContent: 'center',
        transformOrigin: '24% 100%',
        transition: 'transform 0.2s ease-in-out',
        fontFamily: roboto_condensed.style.fontFamily,
        '&:nth-of-type(1)': {
            top: '18%',
            left: '25%',
        },
        '&:nth-of-type(2)': {
            top: '40%',
            left: '19%',
        },
        '&:nth-of-type(3)': {
            top: '52%',
            left: '50%',
        },
        '&:nth-of-type(4)': {
            top: '30.5%',
            left: '57.5%',
        },
        '&:nth-of-type(5)': {
            top: '32%',
            left: '74%',
        },
        '&:nth-of-type(6)': {
            top: '63%',
            left: '79%',
        },
        [breakpoints.up('sm')]: {
            '&:nth-of-type(1)': {
                top: '20%',
                left: '25%',
            },
            '&:nth-of-type(2)': {
                top: '43%',
                left: '20%',
            },
            '&:nth-of-type(3)': {
                top: '55%',
                left: '51%',
            },
            '&:nth-of-type(4)': {
                top: '33.5%',
                left: '58.5%',
            },
            '&:nth-of-type(5)': {
                top: '35%',
                left: '75%',
            },
            '&:nth-of-type(6)': {
                top: '66%',
                left: '80%',
            },
        },
        '&:hover': {
            transform: 'scale(1.25)',
        },
        '& > img': {
            userDrag: 'none',
            OUserDrag: 'none',
            MozUserDrag: 'none',
            KhtmlUserDrag: 'none',
            WebkitUserDrag: 'none',
        },
        '.MuiTypography-caption': {
            fontSize: '18px',
            color: '#866B59',
            userSelect: 'none',
            fontFamily: 'inherit',
            transform: 'translateY(-9px) rotate(-7deg)'
        },
    },
    '& > img': {
        display: 'block',
        userDrag: 'none',
        OUserDrag: 'none',
        MozUserDrag: 'none',
        KhtmlUserDrag: 'none',
        WebkitUserDrag: 'none',
    },
  },
}));

const defaultPos = { top: 0, left: 0, x: 0, y: 0 };

let pos = defaultPos;

const contents = (t: (value: string) => string) => [
    {
        path: AppRouteEnum.Accumulation,
        label: t('portfolio.luAccumulating'),
    },
    {
        path: AppRouteEnum.Study,
        label: t('portfolio.luStudying'),
    },
    {
        path: '',
        label: t('portfolio.luCreating'),
    },
    {
        path: AppRouteEnum.Work,
        label: t('portfolio.luWorking'),
    },
    {
        path: AppRouteEnum.Devotion,
        label: t('portfolio.luDevoting'),
    },
    {
        path: '',
        label: 'Lu in otherland',
    },
];

const BannerPortfolio: FC<{ parentRef: RefObject<HTMLDivElement> }> = ({ parentRef }) => {
    const router = useRouter();
    const t = useTranslations();
    const { classes } = useStyles();

    const [isDragging, setIsDragging] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    const handleMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
        const node = ref.current;
        if (node) {
            // Change the cursor and prevent user from selecting the text
            node.style.cursor = 'grabbing';
            pos = {
                // The current scroll
                left: node.scrollLeft,
                top: node.scrollTop,
                // Get the current mouse position
                x: e.clientX,
                y: e.clientY,
            };
            setIsDragging(true);
        }
    };

    const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
        if (isDragging) {
            const node = ref.current;
            if (node) {
                node.style.cursor = 'grabbing';
                // How far the mouse has been moved
                const dx = e.clientX - pos.x;
                const dy = e.clientY - pos.y;
            
                // Scroll the element
                node.scrollTop = pos.top - dy;
                node.scrollLeft = pos.left - dx;
            }
        }
    };

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
        const node = ref.current;
        if (node) {
            node.style.cursor = 'default';
        }
    }, []);

    useEffect(() => {
        const parentElement = parentRef.current;
        const childElement = ref.current;
        if (parentElement && childElement) {
            const handleScroll: EventListenerOrEventListenerObject = (event) => {
                event.preventDefault();
                parentElement.scrollTop += (event as WheelEvent).deltaY;
            };
            childElement.addEventListener('wheel', handleScroll, { passive: false });
        
            return () => {
                childElement.removeEventListener('wheel', handleScroll);
            };
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    useEffect(() => {  
        return () => {
            pos = defaultPos;
        }
    }, []);

    useEffect(() => {
        const handleMouseUpOutside: EventListenerOrEventListenerObject = (event) => {
          // Check if the event target is outside the component
          if (ref.current && !ref.current.contains(event.target as Node)) {
            // Handle mouse up outside the component
            handleMouseUp();
          }
        };
    
        // Attach the global event listener when the component mounts
        document.addEventListener('mouseup', handleMouseUpOutside);
    
        // Clean up the event listener when the component unmounts
        return () => {
          document.removeEventListener('mouseup', handleMouseUpOutside);
        };
      }, [handleMouseUp]);

    const handleClick = (path: string) => () => {
        if (!path) {
            return;
        }
        router.push(path);
    }

    return (
        <Box
            ref={ref}
            className={`${classes.wrapperBanner} banner-home`}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
        >
            <Box className={classes.wrapperImage}>
                {contents(t).map((content, idx) => (
                    <Box key={idx} className="message" onClick={handleClick(content.path)}>
                        <Image fill src={message} alt="message" />
                        <Typography variant="caption">{content.label}</Typography>
                    </Box>
                ))}
                <Image fill={true} alt="banner" src={background.src} />
            </Box>
        </Box>
    );
};

export default BannerPortfolio;
