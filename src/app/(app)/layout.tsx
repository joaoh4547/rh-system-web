import {Box} from "@mui/material";
import {ReactNode} from "react";
import {AppContextProvider} from "@/components/app-context";
import {MainAppBar} from "@/components/main-app-bar";
import {SideBar} from "@/components/side-bar";
import {AppContent} from "@/components/app-content";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <AppContextProvider>
            <Box>
                <SideBar/>
            </Box>
            <Box display="flex" flexDirection="column" flexGrow={1}>
                <MainAppBar/>
            </Box>
            <Box sx={{minHeight: '100vh'}} display="flex" flexDirection="row">
                <Box sx={{width: '100%', mt: 9, py: 2, px: 1}}>
                    <AppContent> {children}</AppContent>
                </Box>
            </Box>
        </AppContextProvider>

    );
}
