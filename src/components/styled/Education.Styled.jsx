import styled from "styled-components";

 export const StyledEducation = styled.li`
     display: flex;
     flex-direction: column;
     flex:1;
     margin:2rem;
     align-items: flex-start;

     h5{
        font-size: 1.2rem;
        background-color: #d6d6d628;
        padding: 0.1rem 1rem;
        border-radius:10px;
        font-weight:300;
     }
     
     p{  
         font-size: 1.2rem;
         font-weight:500;
     }

 `
 export const EducationIcon = styled.div`
        color: var(--primary);
        font-size:3.5rem;
        position: relative;

        &::before{
             position: absolute;
             content: '';
             width: 2px;
             height: 5rem;
             background-color: var(--primaryPink);
             top: 38%;
             left: 50%;
             transform: translateX(-50%);
        }
 `