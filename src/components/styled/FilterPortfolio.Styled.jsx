import styled from "styled-components";

export const FilterPort = styled.div`
     max-width: 94%;
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin: 2rem auto;

`

export const FilterButton = styled.button`
         padding: 1rem 2rem;
         border: none;
         font-weight: 700;

       &:hover{
         transform: scale(0.90);
         background-color: var(--primary);
         color: var(--lightgrey);
       } 

      
`