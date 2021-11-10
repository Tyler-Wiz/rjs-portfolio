import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

/* ==================
      Color Scheme
================== */
:root{
    --background:#1A1A1D;
    --lightgrey:#f1f1f1;
    --primary:#C3073F;
    --secondary:#6f2232;
    --primaryPink:#950740;
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
}

/* ================
      Typography
================ */

h1,h2,h3,h4,h5,h6{
    margin: 0;
    font-weight: 500;
}

h1 {font-size: clamp(2.5rem, 2.5vw, 4rem);}
h2 {font-size: clamp(2rem, 2.5vw, 3.5rem);}
h3 {font-size: clamp(1.8rem, 2.5vw, 3rem);}
h4 {font-size: clamp(1.5rem, 2.5vw, 2.5rem);}
h5 {font-size: clamp(1.3rem, 2.5vw, 2.2rem);}
p {
    font-size: clamp(1.1rem, 2.5vw, 2.1rem);
    font-weight: 400;
}

`