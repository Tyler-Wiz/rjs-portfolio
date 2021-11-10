import styled from "styled-components";

export const ButtonStyled = styled.button`
      background: none;
      border: 1px solid white;
      padding: 1.5rem 2.5rem;
      border-radius:10px;
      margin: 4rem 0;
      /* box-shadow:2px 1px 2px var(--primary); */
      color: var(--primary);
      font-size:2rem;
      cursor: pointer;
      
      &:hover{
          transform: scale(0.90);
          color: white;
          border: 1px solid var(--primary);
      }

`