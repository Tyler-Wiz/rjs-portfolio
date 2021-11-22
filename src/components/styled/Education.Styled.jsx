import styled from "styled-components";

 export const StyledEducation = styled.li`
     display: flex;
     flex-direction: column;
     justify-content: center;
     flex:1;
     margin:2rem 0 0 2rem;
     align-items: flex-start;

     h5{
        font-size: 1.2rem;
        font-weight:300;
     }
     
     p{  
         font-size: 1.2rem;
         font-weight:500;
     }

 `
 export const EducationIcon = styled.div`
        color: var(--primary);
        font-size:2rem;
        position: relative;
        align-self:center;
        z-index: 5;

        &::after{
             position: absolute;
             content: '';
             width: 180%;
             height: 100%;
             border-radius:50%;
             background-color: #b3aaaa;
             left: -36%;
             bottom: 10%;
             margin:auto;
             z-index: -1;
        }

        &::before{
             position: absolute;
             content: '';
             width: 2%;
             height: 5rem;
             background-color: var(--primaryPink);
             top: 100%;
             left: 50%;
             transform: translateX(-50%);
        }
 `

