import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
/* ==================
      Color Scheme
================== */

:root{
    --background:#FFFFFF;
    --lightgrey:#f1f1f1;
    --primary:#C3073F;
    --secondary:#6f2232;
    --primarytext:#0B0C10;
    
    --darkBackground:#0B0C10;
    --darkBackgroundS:#1F2833;
    --darkPrimary:#66FCF1;
    --darkSecondary:#45A29E;
    --darkText:#C5C6C7;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html{
    font-size: 10px;
}

body{
    margin: 0 auto;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.8;
    letter-spacing: 0.1rem;
    position: relative;
}

/* ================
      Typography
================ */

h1,h2,h3,h4,h5,h6{
    margin: 0;
    font-weight: 500;
}

h1 {font-size: 2.5rem}
h2 {font-size:2rem}
h3 {font-size: 1.8rem }
h4 {font-size: 1.5rem}
h5 {font-size: 1.3rem}
p {
    font-size:1.1rem;
    font-weight:400;
}

`
