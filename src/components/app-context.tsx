'use client'
import {createContext, ReactNode, useState} from "react";

export type AppContext = {
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
}


export const AppContext = createContext<AppContext>({
    menuOpen: false,
    setMenuOpen: () => {}
});


export const AppContextProvider = ({children}: { children: ReactNode }) => {
    const [menuOpen, setMenuOpen] = useState(true);
    return <AppContext.Provider value={{menuOpen, setMenuOpen}}>
        {children}
    </AppContext.Provider>
}