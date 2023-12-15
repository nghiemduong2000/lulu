'use client';

import Box from "@mui/material/Box";
import { makeStyles } from "tss-react/mui";
import background from '../../public/home_bg.png';
import { FC, MouseEventHandler, RefObject, WheelEventHandler, useCallback, useEffect, useRef, useState } from "react";

const useStyles = makeStyles()(() => ({
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
    aspectRatio: '16 / 9',
    img: {
        width: '100%',
        height: '100%',
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

const BannerHome: FC<{ parentRef: RefObject<HTMLDivElement> }> = ({ parentRef }) => {
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

    return (
        <Box
            ref={ref}
            className={`${classes.wrapperBanner} banner-home`}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
        >
            <Box className={classes.wrapperImage}>
                <img src={background.src} />
            </Box>
        </Box>
    );
};

export default BannerHome;
