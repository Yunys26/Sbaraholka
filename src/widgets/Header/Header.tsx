import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {URLs} from "../../__data__/constants/url";
import Button from "@mui/material/Button"
import './Header.scss'
// @ts-ignore
import logo from '../../assets/svg/Logo.svg'
import LoginIcon from '@mui/icons-material/Login';
import {SearchComponent} from "./SearchComponent/SearchComponent";
import {Stack} from "@mui/material";

export const Header = () => {
    return (
        <>
            <div className="header__wrapper">
                <div className="header__logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div>
                    <SearchComponent/>
                    <Button><LoginIcon/></Button>
                </div>
            </div>
            <Stack direction={"row"}>
                <Button><Link to={URLs.main}>Home</Link></Button>
                <Button><Link to={URLs.auth}> Auth</Link></Button>
                <Button><Link to={URLs.user}> User Profile</Link></Button>
            </Stack>
            <div>
                <Outlet/>
            </div>
        </>
    );
};
