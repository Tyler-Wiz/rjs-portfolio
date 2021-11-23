import styled from "styled-components";



export const MobileContainer = styled.nav`
    background-color: ${({ theme }) => theme.body};
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
        color: ${({ theme }) => theme.text};
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

export const DesktopContainer =  styled.ul`
    position: absolute;
    top:3%;
    right: 10%;
    left: 0;
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    list-style: none;
    

    li{
        padding: 0;
        
    }

    p{ font-size:1.6rem;}

    a{
        text-decoration:none;
        color: ${({ theme }) => theme.text};
    }

    li:hover{
        border-bottom:1px solid ${({ theme }) => theme.primary};
        padding: 0;
    }
       
    @media (max-width:750px) {
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