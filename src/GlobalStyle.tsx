import { createGlobalStyle } from 'styled-components';
import { lightSber } from '@salutejs/plasma-tokens/themes'; // Или один из списка: darkEva, darkJoy, lightEva, lightJoy, lightSber
import {
    text, // Цвет текста
    background, // Цвет подложки
    gradient, // Градиент
} from '@salutejs/plasma-tokens';
import React from 'react';

const DocumentStyle = createGlobalStyle`
    html {
        color: ${text};
        background-color: ${background};
        background-image: ${gradient};
    }
`;
const ThemeStyle = createGlobalStyle(lightSber);

export const GlobalStyle = () => (
    <>
        <DocumentStyle />
        <ThemeStyle />
    </>
);