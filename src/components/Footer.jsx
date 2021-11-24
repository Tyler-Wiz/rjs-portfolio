import styled from "styled-components"

const Container =  styled.div`
    display: flex;
    justify-content:space-between;
    padding: 1.6rem;
    position: relative;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};

    &::before{
        content: '';
        width: 95%;
        height: 0.1rem;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
        background-color:  ${({ theme }) => theme.primary};
    }
`

export const Footer = () => {
    return (
        <Container>
            <p>Copyright &copy; 2021</p>
            <p>Tyler Dev</p>
        </Container>
    )
}
