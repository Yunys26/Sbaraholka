import React from 'react';
import {useFetchAllProductsQuery} from "../../app/services/ProductService";

export const AuthPage = () => {
    
    const {data} = useFetchAllProductsQuery()

    return (
        <div>
            AuthPage
        </div>
    );
};