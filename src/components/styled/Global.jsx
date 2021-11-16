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

body{
    font-family: 'Montserrat', sans-serif;
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

export const lightTheme = {
    body:'var(--lightgrey)',
    text: '#121212',
    typing:'#000',
    port:'#000',
    themeSwitch:'var(--primary)'
}

export const darkTheme = {
    body:'var(--background)',
    text: '#fff',
    typing:'var(--primary)',
    port:'var(--lightgrey)',
    themeSwitch:'#e4e3e3'
}
