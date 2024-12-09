'use client'

import {IconButton, styled, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, {useContext} from "react";
import {AppContext} from "@/components/app-context";

import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import {useApplication} from "@/hooks/use-application";

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                width: `calc(100% - 250px)`,
                marginLeft: `250px`,
                transition: theme.transitions.create(['margin', 'width'], {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));

export function MainAppBar() {

    const { menuOpen,toggleMenu} = useApplication()



    return <AppBar position="fixed" open={menuOpen}>
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleMenu}
                edge="start"
                sx={[
                    {
                        mr: 2,
                    },
                    menuOpen && {display: 'none'},
                ]}
            >
                <MenuIcon/>
            </IconButton>
            <Typography variant="h6" noWrap component="div">
                Persistent drawer
            </Typography>
        </Toolbar>
    </AppBar>
}