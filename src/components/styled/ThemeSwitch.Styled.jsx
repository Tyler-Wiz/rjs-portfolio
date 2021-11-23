import styled from "styled-components";

export const ThemeToggleIcon = styled.div`
    position: absolute;
    top: .14%;
    right: 30%;
    color: ${({ theme }) => theme.themeSwitch};;
    font-size:3rem;
    z-index: 10;

    @media(min-width:750px) {
        top: .14%;
        right: 2%;  
    }
`