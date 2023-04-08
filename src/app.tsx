import React from 'react';
import { RouterWrapper } from './router';
import './App.scss'
import {ApiProvider} from '@reduxjs/toolkit/query/react'
import {productsAPI} from "./app/services/ProductService";

const App = () => (
    <ApiProvider api={productsAPI}>
        <RouterWrapper />
    </ApiProvider>
)

export default App;
