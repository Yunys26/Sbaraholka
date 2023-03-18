import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {URLs} from "../../__data__/constants/url";

export const Header = () => {
    return (
        <>
            <div>
                <Link to={URLs.main}> Home</Link>
                <Link to={URLs.auth}> Auth</Link>
                <Link to={URLs.user}> User Profile</Link>
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    );
};
