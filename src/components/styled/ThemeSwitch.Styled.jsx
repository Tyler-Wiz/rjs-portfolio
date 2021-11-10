import styled from "styled-components";

export const ThemeToggleIcon = styled.div`
    position: absolute;
    top: .3%;
    left: 5%;
    color: ${({ theme }) => theme.themeSwitch};;
    font-size:3rem;
    z-index: 10;
`