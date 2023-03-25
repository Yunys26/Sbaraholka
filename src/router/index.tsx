import React from 'react'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import {URLs} from '../__data__/constants/url';
import {AuthPage, MainPage, UserProfilePage} from "../pages";
import {Header} from "../widgets";
import {createTheme, ThemeProvider} from "@mui/material";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Header/>}>
            <Route index element={<MainPage/>}/>
            <Route path={URLs.auth} index element={<AuthPage/>}/>
            <Route path={URLs.user} index element={<UserProfilePage/>}/>
            <Route path="*" element={<MainPage/>}/>
        </Route>
    )
);

export const RouterWrapper = () => {
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router}/>
        </ThemeProvider>
    )
}

const theme = createTheme({
    palette: {
        primary: {
            main: "#21A038",
        },
    },
});
