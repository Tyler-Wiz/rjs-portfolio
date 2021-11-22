import styled from "styled-components"

export const Wrapper = styled.section`
    background-color:var(--lightgrey);
    padding: 4rem 1rem;

`

export const Container = styled.ul`
    max-width: 1600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    margin: 0 auto;
`

export const Card = styled.div`
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
export const CardContent = styled.div`
  position: relative;
  padding: 3rem;
  z-index: 1;
  transition: 0.5s;
  transform: translateX(-100rem);
  transition-delay: .5s;
`

export const CardWrapper =  styled.li`
    position: relative;
    width: 45rem;
    height: 28rem;
    margin: 1rem;
    overflow: hidden;

    h2{
        margin: 2rem;
    }

   img{
        position:absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover ${Card}::before {
        transform: scaleX(1);
        transition: transform 0.5s ease-in-out;
        transform-origin:right ;
        transition-delay: 0;  
    }

    &:hover ${Card} ${CardContent} {
        transform: translateX(0px);
        transition-delay: 0;
    }
`

export const FilterPort = styled.div`
     max-width: 100%;
     padding: 1rem;
     display: flex;
     flex-wrap:wrap;
     justify-content: center;
     align-items: center;
     margin: 2rem auto;

`

export const FilterButton = styled.button`
         padding: 1rem 2rem;
         border: none;
         font-weight: 500;
         margin:1rem;
         text-transform: uppercase;
         background-color: var(--primary);

       &:hover{
         transform: scale(0.90);
         color: var(--lightgrey);
       } 

      
`
