'use client'
import {Divider, Drawer, IconButton, styled, Typography, useTheme} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Menu} from "@/components/menu/menu";
import {useApplication} from "@/hooks/use-application";


const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',

    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
}));

export function SideBar() {

    const {menuOpen, toggleMenu} = useApplication()
    const theme = useTheme();

    return (
        <Drawer
            sx={{
                width: 250,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 250,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={menuOpen}
        >
            <DrawerHeader>
                <Typography variant="subtitle1" noWrap component="div">
                    RH - System
                </Typography>
                <IconButton onClick={toggleMenu}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                </IconButton>

            </DrawerHeader>
            <Divider/>
            <Menu/>
        </Drawer>
    )


}