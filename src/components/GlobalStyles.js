import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

img {
    display: block;
    max-width: 100%;
}
body {
    background : #fff;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
}

h1{
    font-size: 3rem;
}

h2{
    font-size: 2.25rem;
}

h3{
    font-size: 1.25rem; 
}



`;

export default GlobalStyles;
