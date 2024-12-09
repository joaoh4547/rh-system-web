'use client'
import {MenuItem} from "@/components/menu/menu";
import {useRouter} from "next/navigation";
import {Collapse, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {useState} from "react";
import {ExpandLess, ExpandMore} from "@mui/icons-material";

export function MenuItemButton({item, isSubMenu = false}: { item: MenuItem, isSubMenu?: boolean }) {
    const [opened, setOpened] = useState(false)
    const {push} = useRouter()

    function navigate() {
        if (item.url != null) {
            push(item.url)
        }
    }


    if (item.subMenu) {
        return <>
            <ListItemButton  onClick={() => setOpened(!opened)}>
                <ListItemIcon>
                    {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.nome}/>
                {opened ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse in={opened}>
                <List component="div" disablePadding>
                    {item.subMenu.map(subItem => (
                        <MenuItemButton item={subItem} key={`${item.nome}-${subItem.nome}`} isSubMenu/>
                    ))}
                </List>
            </Collapse>
        </>
    } else {
        return <ListItemButton onClick={navigate} sx={{pl: isSubMenu ? 4 : 0}}>
            <ListItemIcon>
                {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.nome}/>
        </ListItemButton>
    }
}