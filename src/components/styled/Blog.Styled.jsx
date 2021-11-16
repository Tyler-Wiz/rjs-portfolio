import styled, { keyframes } from "styled-components";

const BlogAnimation = keyframes`
     0% {
    -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
    opacity: 0;
  }
    100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
`

export const StyledBlog = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    color:black;
    padding: 2rem;
    animation: ${BlogAnimation} 2s ease-in-out;
    list-style: none;

    

   li {
       position: relative;
       width: 45rem;
       margin-bottom: 2.5rem;
       box-shadow: 
       rgba(0, 0, 0, 0.19) 0px 10px 20px, 
       rgba(0, 0, 0, 0.23) 0px 6px 6px;
       transform: scale(1);
       transition: transform 1s ease-in;
       cursor: pointer;
   }

   li > img {
       width: 100%;
       height: 25rem;
       object-fit: cover;
       border-bottom: .5rem solid var(--primary);
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

