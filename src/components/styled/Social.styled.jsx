import styled from "styled-components";

export const StyledSocial = styled.ul`
      width: 45%;
      display: flex;
      justify-content: space-between;
      list-style: none;

      a{
          color: var(--lightgrey);
          font-size:2.5rem;
      }

      li:nth-child(1) a{
        color: #c4cccb;
       }

      li:nth-child(2) a{
        color: #0084ff;
       }

       li:nth-child(3) a{
        color: #d60d24;
       }

      li:nth-child(4) a{
        color: #acb4bb;
       }
`