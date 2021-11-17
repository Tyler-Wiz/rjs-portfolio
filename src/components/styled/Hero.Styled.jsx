import styled, { keyframes } from "styled-components";

export const StyledHero = styled.section`
    background-color: ${({ theme }) => theme.body};;
    color: ${({ theme }) => theme.text};
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    text-align: center;
    
    h2 {
        text-transform: none;
        color: var(--primary);
        margin-bottom: 1.5rem;
    }

    span {
        margin-left:.5rem;
        color: var(--primary);
    }
`

const ArrowAnnimation = keyframes`
    0% {
    -webkit-transform: translateY(-30px);
            transform: translateY(-30px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    -webkit-transform: translateY(-24px);
            transform: translateY(-24px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  65% {
    -webkit-transform: translateY(-12px);
            transform: translateY(-12px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  82% {
    -webkit-transform: translateY(-6px);
            transform: translateY(-6px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  93% {
    -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
`

export const Arrow = styled.div`
    position: absolute;
    padding: 1.7rem 4rem;
    bottom: 0;
    left: 0;
    font-size: 2rem;
    color:var(--primary);
    cursor: pointer;
    animation: ${ArrowAnnimation} 2s ease-in-out 1s infinite;
`