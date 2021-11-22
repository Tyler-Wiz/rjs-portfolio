import styled from "styled-components";

export const Container = styled.nav`
    background-color: var(--background);
    position: fixed;
    height: 70vh;
    width: 60%;
    top: 3%;
    right: ${({ShowMenu}) => ShowMenu ? '0px' : '-1000px'};
    padding: 5rem 0 2rem 2rem;
    z-index: 1;
    transition: ${({ShowMenu}) => ShowMenu ? '.5s ease-in-out' : '1s ease-in-out'};
    
    li{
        list-style: none;
    }

    a{
        color: var(--lightgrey);
        text-decoration:none;
        display: flex;
    }

    h3{
        align-self: center;
    }

    h4{
        font-size: 3rem;
        margin-right: 2rem;
    }

    @media (min-width:750px) {
         display:none; 
    }

`
export const Hamburger = styled.div`
    z-index: 3;
    position: absolute;
    top: 1%;
    right: 5%;
    cursor: pointer;
    font-size: 3rem;
    color: var(--primary);

    @media (min-width:750px) {
         display:none; 
    }
`