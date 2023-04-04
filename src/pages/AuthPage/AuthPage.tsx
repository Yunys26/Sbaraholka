import React from 'react';
import {useFetchAllProductsQuery} from "../../app/services/ProductService";

export const AuthPage = () => {
    const {data} = useFetchAllProductsQuery()
    console.log('data', data)
    return (
        <div>
            AuthPage
        </div>
    );
};