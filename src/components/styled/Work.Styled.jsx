import styled from "styled-components";

export const StyledWork = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
 
    li {
        display: flex;
        align-items: center;
        justify-content:flex-start;
    }

    h3{
        font-size:3.5rem;
        color: var(--primary);
        margin-right:2rem;
    }

    h4{
        font-size:1.8rem;
        justify-self: start;
        margin-right:2rem;
        color: var(--background);
    }

   
`