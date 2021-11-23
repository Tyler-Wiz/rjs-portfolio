import styled from "styled-components";
import { SlideUp } from "../../utilities/Animations/SlideUp";

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.body};
    padding: 4rem 0;
    color:${({ theme }) => theme.text};
`

export const Container = styled.ul`
    display: flex;
    max-width: 1500px;
    margin:0 auto;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    animation: ${SlideUp} 2s ease-in-out;
    list-style: none;
    color:black;

    
   li {
       position: relative;
       width: 43rem;
       margin: 1rem;
       box-shadow: 
       rgba(0, 0, 0, 0.19) 0px 10px 20px, 
       rgba(0, 0, 0, 0.23) 0px 6px 6px;
       transform: scale(1);
       transition: transform 1s ease-in;
       cursor: pointer;
       text-transform: capitalize;
   }

   li > img {
       width: 100%;
       height: 25rem;
       object-fit: cover;
       border-bottom: .5rem solid ${({ theme }) => theme.primary};
   }

   li:hover {
       transform: scale(0.98);
       transition: transform .5s ease-in-out
   }

   li > div{
       background-color: var(--lightgrey);
       padding: 1.5rem;
       margin-top: -6px;
   }
`

