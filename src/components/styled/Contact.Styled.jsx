import styled from "styled-components";

export const StyledContact = styled.form`
    display: flex;
    flex-direction: column;
    width: 95%;

    input, textarea{
        width: 95%;
        outline: none;
        padding: 1rem 2rem;
        margin: 1rem auto;
        border-radius:20px 5px;
        border: 1px solid var(--primary);
    }

    button {
        width: 95%;
        border-radius:20px 5px;
    }
`