'use client';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import React, { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from '@/navigation';
import { IMenus } from './Navbar';

interface ICustomDrawer {
    open: boolean;
    navbarList: IMenus[];
    handleCloseDrawer: () => void;
}

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

const CustomDrawer: FC<ICustomDrawer> = ({ open, navbarList, handleCloseDrawer }) => {
  return (
    <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleCloseDrawer}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
        <List>
          {navbarList.map((navbar, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                {
                    navbar.path ? <Link href={navbar.path}>{navbar.title}</Link> : <ListItemText primary={navbar.title} />
                }
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
  )
}

export default CustomDrawer;
