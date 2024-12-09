'use client'
import {ReactElement} from "react";
import {AccountCircle, Lens} from "@mui/icons-material";
import {Box, List} from "@mui/material";
import {MenuItemButton} from "@/components/menu/menu-item-button";


export type MenuItem = {
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
                url: "user",
                icon: <AccountCircle/>
            }
        ]
    }
]


export function Menu() {
    return (
        <Box sx={{width: '100%'}}>
            <List>
                {menu.map((item) => (
                    <MenuItemButton item={item} key={item.nome}/>
                ))}
            </List>
        </Box>
    )
}