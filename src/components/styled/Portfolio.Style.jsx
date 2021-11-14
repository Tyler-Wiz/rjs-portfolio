import styled from "styled-components"

export const PortfolioBox = styled.div`
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before{
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: var(--primary);
   transform: scaleX(0);
   transition: transform 0.5s ease-in-out;
   transform-origin:left ;
   transition-delay: .5s;
 }

`

export const PortfolioContent = styled.div`
  position: relative;
  padding: 3rem;
  z-index: 1;
  transition: 0.5s;
  transform: translateX(-100rem);
  transition-delay: .5s;
`

export const StylePorfolio = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
    position: relative;
    cursor: pointer;

    img{
        position:absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    li{
        position: relative;
        min-width: 35rem;
        min-height: 28rem;
        margin: 1rem;
        overflow: hidden;
    }

    &:hover ${PortfolioBox}::before {
        transform: scaleX(1);
        transition: transform 0.5s ease-in-out;
        transform-origin:right ;
        transition-delay: 0;  
    }

    &:hover ${PortfolioBox} ${PortfolioContent} {
        transform: translateX(0px);
        transition-delay: 0;
    }
`



