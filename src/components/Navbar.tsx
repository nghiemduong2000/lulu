/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client';

import { playpen_sans } from "@/app/fonts";
import Box from "@mui/material/Box";
import { FC } from "react";
import { makeStyles } from "tss-react/mui";
import wood_board from '../../public/wood_board.png';
import Typography from "@mui/material/Typography";
import { AppRouteEnum } from "@/enum";
import { usePathname, useRouter } from "@/navigation";
import { useLocale, useTranslations } from "next-intl";
import CustomMenu from "@/app/CustomMenu";
import Image from "next/image";

enum LANGUAGE {
    ENGLISH = 'ENGLISH',
    VIETNAMESE = 'VIETNAMESE',
}

interface IMenu {
    title: string;
    type?: string;
    value?: string;
    path?: AppRouteEnum;
}

export interface IMenus extends IMenu {
    children?: IMenu[];
}

const useStyles = makeStyles()(({ breakpoints }) => ({
    navbar: {
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        position: 'absolute',
    },
    wrapperMenu: {
        gap: '10px',
        margin: 'auto',
        display: 'flex',
        padding: '0 20px',
        maxWidth: '980px',
        justifyContent: 'center',
        [breakpoints.up('md')]: {
            gap: '20px',
        },
        [breakpoints.up('lg')]: {
            gap: '30px',
        },
    },
    popOverRoot: {
        pointerEvents: 'none',
    },
    wrapperWoodBoard: {
        flex: 1,
        position: 'relative',
        '&::before': {
            top: 'calc(100% + 5px)',
            content: `''`,
            width: '100%',
            height: '50px',
            display: 'block',
            position: 'absolute',
            transform: 'translateY(-50%)',
        },
        '.woodBoard': {
            cursor: 'pointer',
            position: 'relative',
            aspectRatio: '180/127',
            transition: 'all 0.2s linear',
            '.MuiTypography-h3': {
                left: '0px',
                width: '100%',
                bottom: '22%',
                fontWeight: 700,
                fontSize: '12px',
                display: 'block',
                color: '#FFF4E9',
                textAlign: 'center',
                position: 'absolute',
                transition: 'all 0.2s linear',
                fontFamily: playpen_sans.style.fontFamily,
                [breakpoints.up('lg')]: {
                    fontSize: '16px',
                },
            },
        },
        '&:hover': {
            '.menu': {
                opacity: 1,
                visibility: 'visible',
            },
            '.woodBoard': {
                transform: 'translateY(8px) scale(1.1)',
                '.MuiTypography-h3': {
                    transform: 'scale(1.1)',
                },
            },
        },
    },
}));

const language = {
    [LANGUAGE.ENGLISH]: 'en',
    [LANGUAGE.VIETNAMESE]: 'vi',
};

const menus = (t: (value: string) => string): IMenus[] => [
    {
        path: AppRouteEnum.Home,
        title: t('home.title'),
    },
    {
        path: AppRouteEnum.About,
        title: t('aboutLu.title'),
    },
    {
        path: AppRouteEnum.Portfolio,
        title: t('portfolio.title'),
        children: [
            {
                path: AppRouteEnum.Study,
                title: 'Education',
            },
            {
                path: AppRouteEnum.Devotion,
                title: 'Achievement',
            },
            {
                path: AppRouteEnum.Work,
                title: 'Experience',
            },
            {
                path: AppRouteEnum.Portfolio,
                title: 'Skill',
            },
            {
                path: AppRouteEnum.Accumulation,
                title: 'Project',
            },
            {
                path: AppRouteEnum.Portfolio,
                title: 'Other land',
            },
        ],
    },
    {
        path: AppRouteEnum.Blog,
        title: t('blog.title'),
    },
  ];

const BoardMenu: FC<{ isLanguage?: boolean; data: IMenus }> = ({ isLanguage, data: { title, path, children } }) => {
    const router = useRouter();
    const locale = useLocale();
    const pathname = usePathname();
    const { classes } = useStyles();

    const handleClick = () => {
        if (path) {
            router.push(path);
        }
    };

    const handleChangeLanguage = (value: LANGUAGE) => {
        router.replace(pathname, { locale: language[value] })
    };
    
    const handleClickMenuItem = (type?: string, path?: string) => {
        if (isLanguage) {
            handleChangeLanguage(type as LANGUAGE)
        } else if (path) {
            router.push(path);
        }
    }
  
    return (
        <Box
            className={classes.wrapperWoodBoard}
            onClick={handleClick}
        >
            <Box className="woodBoard">
                <Image fill src={wood_board.src} alt="Wood board" />
                <Typography variant="h3">{title.toUpperCase()}</Typography>
            </Box>
            {children?.length && <CustomMenu value={isLanguage ? locale : ''} menus={children} className="menu" onClick={handleClickMenuItem} />}
        </Box>
    )
};

const Navbar = () => {
    const t = useTranslations();
    const { classes } = useStyles();

    return (
        <Box className={classes.navbar}>
            <Box className={classes.wrapperMenu}>
                {menus(t).map((menu) => (
                    <BoardMenu key={menu.title} data={menu} />
                ))}
                <BoardMenu
                    isLanguage
                    data={{
                        title: t('language.title'),
                        children: [
                            {
                                value: 'en',
                                type: LANGUAGE.ENGLISH,
                                title: t('language.english'),
                            },
                            {   
                                value: 'vi',
                                type: LANGUAGE.VIETNAMESE,
                                title: t('language.vietnamese'),
                            },
                        ],
                    }}
                />
            </Box>
        </Box>
    )
}

export default Navbar