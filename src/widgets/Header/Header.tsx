import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {URLs} from "../../__data__/constants/url";
import {Button} from "@salutejs/plasma-ui";

export const Header = () => {
    return (
        <>
            <div>
                <Button><Link to={URLs.main}> Home</Link></Button>
                <Link to={URLs.auth}> Auth</Link>
                <Link to={URLs.user}> User Profile</Link>
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    );
};
