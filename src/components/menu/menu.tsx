'use client'
import {ReactElement} from "react";
import {AccountCircle, Lens} from "@mui/icons-material";
import {Box, List} from "@mui/material";
// import

type MenuItem = {
    nome: string;
    url?: string;
    icon: ReactElement;
    subMenu?: MenuItem[];
}

export const menu: MenuItem[] = [
    {
        nome: "Geral",
        icon: <Lens/>,
        subMenu: [
            {
                nome: "Usuarios",
                url: "users",
                icon: <AccountCircle/>
            }
        ]
    }
]


export function Menu() {
    return (
        <Box sx={{width: '100%'}}>
            <List>
                teste
            </List>
        </Box>
    )
}