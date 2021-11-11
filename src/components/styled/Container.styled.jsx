import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const SectionContainer = styled.section`
    padding: 1rem;
    margin-bottom:4rem;
    background-color: ${({Bg}) => Bg ? 'var(--background)' : 'var(--lightgrey)'};
    color: ${({Bg}) => Bg ? 'var(--lightgrey)' : 'var(--background)'};

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    img{
        width: 100%;
    }

`