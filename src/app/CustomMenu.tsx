import React, { FC } from 'react';
import { makeStyles } from 'tss-react/mui';
import { playpen_sans } from "@/app/fonts";

interface ICustomMenu {
    value: string;
    className: string;
    menus: { title: string, value?: string, type?: string, path?: string }[];
    onClick: (type?: string, path?: string) => void;
}

const useStyles = makeStyles()(() => ({
    menusList: {
        margin: 0,
        padding: 0,
        opacity: 0,
        width: '100%',
        overflow: 'hidden',
        visibility: 'hidden',
        borderRadius: '10px',
        position: 'absolute',
        listStyleType: 'none',
        top: 'calc(100% + 20px)',
        backgroundColor: 'white',
        border: '4px solid #cf9972',
        transition: 'all 0.2s linear',
        boxShadow: '0px 8px 15px 0px #00000080',
        '.item': {
            fontWeight: 500,
            cursor: 'pointer',
            color: '#cf9972',
            textAlign: 'center',
            padding: '8px 12px',
            backgroundColor: '#f0ece8',
            transition: 'all 0.1s linear',
            fontFamily: playpen_sans.style.fontFamily,
            '&.active': {
                color: '#f0ece8',
                backgroundColor: '#cf9972',
            },
            '&:hover': {
                color: '#f0ece8',
                backgroundColor: '#dac2b2',
            },
        },
    },
}));

const CustomMenu: FC<ICustomMenu> = ({ value, menus, className, onClick }) => {
    const { classes, cx } = useStyles();

    const handleClick = (type?: string, path?: string) => (event: any) => {
        event.stopPropagation();
        if (!!onClick) {
            onClick(type, path);
        }
    };

    return (
        <ul className={`${classes.menusList} ${className}`}>
            {menus?.map((menu) => (
                <li
                    key={menu.title}
                    className={cx('item', value === menu.value && 'active')}
                    onClick={handleClick(menu.type, menu.path)}
                >
                    {menu.title}
                </li>
            ))}
        </ul>
    );
}

export default CustomMenu