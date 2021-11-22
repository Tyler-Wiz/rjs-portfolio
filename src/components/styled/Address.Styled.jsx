import styled from "styled-components";

export const StlyedAddress = styled.div`
    display: flex;
    width: 95%;
    flex: 1;
    flex-direction: column;
    padding: 3rem;
    background-color: var(--primary);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    margin: 1rem auto;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;

    h5 {
        margin-left: 1rem;
    }

    h2 {
        margin-bottom: 3rem;
    }

    @media (min-width:750px) {
        height: 400px;
        width: 200px;
        align-self:center;
        border-bottom-left-radius:0px;
        border-bottom-right-radius:0px;
    }

`

export const AddressDtl = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    font-size: 3rem;
    margin: 0 0 1rem 0;
`