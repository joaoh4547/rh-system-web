import {Box} from "@mui/material";
import {ReactNode} from "react";
import {Menu} from "@/components/menu/menu";
import {AppContextProvider} from "@/components/app-context";
import {MainAppBar} from "@/components/main-app-bar";
import {SideBar} from "@/components/side-bar";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (

        <AppContextProvider>
            <Box sx={{minHeight: '100vh'}} display="flex" flexDirection="row">
                <Box>
                    <SideBar/>
                </Box>
                <Box width="100%">
                    <MainAppBar/>
                    {children}
                </Box>
            </Box>
        </AppContextProvider>

    );
}
