import { keyframes } from "styled-components";

export const SlideUp = keyframes`
     0% {
    -webkit-transform: translateY(100px);
            transform: translateY(100px);
    opacity: 0;
  }
    100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
`