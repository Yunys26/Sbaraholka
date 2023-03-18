import React from 'react'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Routes} from 'react-router-dom'
import {URLs} from '../__data__/constants/url';
import {AuthPage, MainPage, UserProfilePage} from "../pages";
import {Header} from "../widgets";

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
        <RouterProvider router={router}/>
    )
}
