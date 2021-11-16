import styled from "styled-components";

export const Title = styled.h2`
        margin: 3rem 0;
        text-transform: uppercase;
        font-weight:700;
        position: relative;
        display: inline-block;
        color: ${({color}) => color ? 'black' : 'white' };
        

    &::after{
        content: '';
        height: 0.2rem;
        width: 80%;
        margin: 0 auto;
        background-color: var(--primary);
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
    }
`