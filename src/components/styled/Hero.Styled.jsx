import styled from "styled-components";

export const StyledHero = styled.section`
    background-color: var(--background);
    color: var(--lightgrey);
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    text-align: center;

    h2 {
        text-transform: none;
        color: var(--primary);
        margin-bottom: 1.5rem;
    }

    span {
        margin-left:.5rem;
        color: var(--primary);
    }
`

export const Arrow = styled.div`
    position: absolute;
    padding: 1.7rem 4rem;
    bottom: 0;
    left: 0;
    font-size: 2rem;
    color:var(--primary);
    cursor: pointer;
`