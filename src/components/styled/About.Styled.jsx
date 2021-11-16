import styled from "styled-components";

export const StyledAbout = styled.section`
    padding: 1rem;
    background-color: var(--lightgrey);

    img {
    display: block;
    width: 30rem;
    height: 30rem;
    margin: 4rem auto;
    border-radius: 50%;
    border: 6px solid var(--background);
    }

    & > ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style-type: none;
    text-transform: capitalize;
    margin-bottom: 7rem;
    }

    & > ul > li {
       padding: 1rem;
    }

    h5{
        font-weight:700;
    }
`