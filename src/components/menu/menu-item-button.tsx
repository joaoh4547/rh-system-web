'use client'
import {MenuItem} from "@/components/menu/menu";
import {usePathname, useRouter} from "next/navigation";
import {Collapse, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {useState} from "react";
import {ExpandLess, ExpandMore} from "@mui/icons-material";

export function MenuItemButton({item, isSubMenu = false}: { item: MenuItem, isSubMenu?: boolean }) {
    const [opened, setOpened] = useState(true)
    const {push} = useRouter()
    const pathname = usePathname()

    function navigate() {
        if (item.url != null) {
            push(item.url)
        }
    }

    function isSelected() {
        console.log(item.url)
        console.log(pathname)
        let url = item.url as string
        if (!url.startsWith('/')) {
            url = '/' + url
        }

        return String(pathname).startsWith(url)
    }


    if (item.subMenu) {
        return <>
            <ListItemButton suppressHydrationWarning onClick={() => setOpened(!opened)}>
                <ListItemIcon suppressHydrationWarning>
                    {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.nome}/>
                {opened ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse in={opened} unmountOnExit suppressHydrationWarning>
                <List component="div" disablePadding>
                    {item.subMenu.map(subItem => (
                        <MenuItemButton item={subItem} key={`${item.nome}-${subItem.nome}`} isSubMenu/>
                    ))}
                </List>
            </Collapse>
        </>
    } else {
        return <ListItemButton suppressHydrationWarning selected={isSelected()} onClick={navigate} sx={{
            pl: isSubMenu ? 4 : 0,
            '&.Mui-selected': {
                backgroundColor: '#8f67ef', // Cor de fundo do item selecionado
                color: '#fff', // Cor do texto
                '&:hover': {
                    backgroundColor: '#7852d6', // Cor de fundo ao passar o mouse
                },
            },
        }}>
            <ListItemIcon sx={{color: isSelected() ? '#fff' : undefined}}>
                {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.nome}/>
        </ListItemButton>
    }
}