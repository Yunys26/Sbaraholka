import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {URLs} from "../../__data__/constants/url";
import Button from "@mui/material/Button"
import './Header.scss'
// @ts-ignore
import logo from '../../assets/svg/Logo.svg'
import LoginIcon from '@mui/icons-material/Login';
import {SearchComponent} from "./SearchComponent/SearchComponent";

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
            <div>
                <><Link to={URLs.main}> Home</Link></>
                <Link to={URLs.auth}> Auth</Link>
                <Link to={URLs.user}> User Profile</Link>
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    );
};
