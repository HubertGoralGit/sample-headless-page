import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 62.5%; 
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        font-size: 1.6rem;
        margin: 100px 0 0 0;
        font-family: 'Montserrat';
    }

    button {
        padding: 0;
        cursor: pointer;
        font-family: 'Montserrat';
    }
    
    ul {
        padding: 0;
        margin: 0;
    }
`

export default GlobalStyle
