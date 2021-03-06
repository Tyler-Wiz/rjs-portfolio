import styled from "styled-components";
import { ArrowAnnimation } from '../../utilities/Animations/Bounce';

export const Container = styled.section`
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    h2 {
        text-transform: none;
        color: ${({ theme }) => theme.primary};
        margin-bottom: 1.5rem;
    }

    span {
        margin-left:.5rem;
        color: ${({ theme }) => theme.primary};
    }
`

export  const Arrow = styled.div`
    position: absolute;
    padding: 1.7rem 4rem;
    bottom: 2%;
    left: 0;
    font-size: 2rem;
    color:${({ theme }) => theme.primary};
    cursor: pointer;
    animation: ${ArrowAnnimation} 2s ease-in-out 1s infinite;
`

export const Button = styled.button`
      background: none;
      border: 1px solid ${({ theme }) => theme.text};
      padding: 1.5rem 2.5rem;
      border-radius:10px;
      margin: 4rem 0;
      color: ${({ theme }) => theme.primary};
      font-size:2rem;
      cursor: pointer;
      
      &:hover{
          transform: scale(0.90);
          color: ${({ theme }) => theme.text};
          border: 1px solid ${({ theme }) => theme.primary};
      }

`