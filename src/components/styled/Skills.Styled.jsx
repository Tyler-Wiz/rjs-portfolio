import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: .8rem;
    background-color: white;
    border-radius: 10px;


    & > div {
        background: ${({ theme }) => theme.primary};
        border-radius: 20px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 0;
        opacity: 0;
        transition: 1s ease 0.3s;
        }
`

export const Container = styled.li`
       
`

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .5rem auto;
`