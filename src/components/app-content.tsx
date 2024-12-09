'use client'
import {ReactNode, useContext} from "react";
import {Box, BoxProps, styled} from "@mui/material";
import {AppContext} from "@/components/app-context";
import {useApplication} from "@/hooks/use-application";



const AppContainer = styled(Box, {
})<BoxProps>(({theme}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            style: {
                transition: theme.transitions.create(['margin', 'width'], {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));

export function AppContent({children}: { children: ReactNode }) {

    const {menuOpen} = useApplication()

    return (
        <AppContainer ml={menuOpen ? '250px' : 0}>
            {children}
        </AppContainer>
    )
}