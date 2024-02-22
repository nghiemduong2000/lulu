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

interface IMenus extends IMenu {
    children?: IMenu[];
}

const useStyles = makeStyles()(() => ({
    wrapperMenu: {
      top: 0,
      left: 0,
      zIndex: 1,
      gap: '30px',
      width: '100%',
      display: 'flex',
      position: 'absolute',
      justifyContent: 'center',
    },
    popOverRoot: {
        pointerEvents: 'none',
    },
    wrapperWoodBoard: {
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
            transition: 'all 0.2s linear',
            img: {
                width: '180px',
            },
            '.MuiTypography-h3': {
                left: '0px',
                width: '100%',
                bottom: '32px',
                fontWeight: 700,
                fontSize: '16px',
                display: 'block',
                color: '#FFF4E9',
                textAlign: 'center',
                position: 'absolute',
                transition: 'all 0.2s linear',
                fontFamily: playpen_sans.style.fontFamily,
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
                path: AppRouteEnum.Portfolio,
                title: 'Education',
            },
            {
                path: AppRouteEnum.Portfolio,
                title: 'Achievement',
            },
            {
                path: AppRouteEnum.Portfolio,
                title: 'Skill',
            },
            {
                path: AppRouteEnum.Portfolio,
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
    {
        path: AppRouteEnum.Podcast,
        title: t('podcast.title'),
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
    
    const handleClickMenuItem = (type?: string) => {
        if (isLanguage) {
            handleChangeLanguage(type as LANGUAGE)
        }
    }
  
    return (
        <Box
            className={classes.wrapperWoodBoard}
            onClick={handleClick}
        >
            <Box className="woodBoard">
                <img src={wood_board.src} />
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
    )
}

export default Navbar