import styled from "styled-components";

export const StlyedAddress = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem;
    background-color: var(--primary);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    margin: -1rem 0 5rem 0;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;

    h5 {
        margin-left: 1rem;
    }

    h2 {
        margin-bottom: 3rem;
    }

`

export const AddressDtl = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    font-size: 3rem;
    margin: 0 0 1rem 0;
`