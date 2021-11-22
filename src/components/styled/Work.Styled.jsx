import styled from "styled-components";

export const Container = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2.5rem;
    padding: 1rem;
 
    li {
        display: flex;
        flex-direction:column;
        border: 1px solid grey;
        width: 200px;
        padding: 2rem;
        border-radius:7px;
    }

    div{
        display: flex;
        align-items: center;
    }

    h3 {
        font-size:3.5rem;
        color: var(--primary);
        margin-right:2rem;
    }

    h4 {
        font-size:2.3rem;
        justify-self: start;
        color: var(--primary);
    }

   h5{
    font-size:1.7rem;
   }
`