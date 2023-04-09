import React from 'react';
import { RouterWrapper } from './router';
import './App.scss'
import {ApiProvider} from '@reduxjs/toolkit/query/react'
import {sbaraholkaAPI} from "./app/services/Service";

const App = () => (
    <ApiProvider api={sbaraholkaAPI}>
        <RouterWrapper />
    </ApiProvider>
)

export default App;
