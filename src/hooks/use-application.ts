import {useContext} from "react";
import {AppContext} from "@/components/app-context";

export function useApplication() {
    const {setMenuOpen, menuOpen} = useContext(AppContext)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return {
        toggleMenu,
        menuOpen,
        setMenuOpen
    }
}