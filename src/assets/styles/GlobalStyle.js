import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *, *::after, *::before {
        box-sizing: inherit;
    }
    body {
        font-family: 'DM Sans', sans-serif;
        margin: 0;
        padding: 0;
        overflow-y: hidden;
    }
    a, button {
        font-family: 'DM Sans', sans-serif;
    }


`;
