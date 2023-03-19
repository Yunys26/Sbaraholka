import React from 'react';
import { RouterWrapper } from './router';
import { DeviceThemeProvider, SSRProvider } from '@salutejs/plasma-ui';
import { GlobalStyle } from './GlobalStyle';
import './App.scss'
const App = () => (
    <DeviceThemeProvider>
        <SSRProvider>
            <RouterWrapper />
            <GlobalStyle />
        </SSRProvider>
    </DeviceThemeProvider>
)

export default App;

