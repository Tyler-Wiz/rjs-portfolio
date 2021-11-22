import styled from "styled-components";

export const Wrapper = styled.section`
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    flex-direction:column;
    margin: 3rem auto;
    /* gap: 2rem; */

    @media (min-width:750px) {
        flex-direction:row-reverse;
    }
`



export const StyledContact = styled.form`
    display: flex;
    flex-direction: column;
    flex: 3;
    width: 95%;
    padding: 3rem;
    margin: 1rem auto;
    color: black;
    background-color: var(--lightgrey);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    p{ 
        margin-bottom: 1rem;
        color: var(--primary);
    }

    input, textarea{
        width: 100%;
        outline: none;
        resize: none;
        padding: 1.5rem 5rem;
        margin: 1rem auto;
        background-color: white;
        border:3px solid var(--lightgrey);
        border-radius:10px;
        box-shadow: rgba(0, 0, 0, 0.041) 0px 15px 10px -20px;
        text-transform: capitalize;
        font-family: 'Montserrat', sans-serif;
    }

    button {
        flex:1;
        padding: 1rem 3rem;
        background-color: white;
        border: none;
        position: relative;
        font-family: 'Montserrat', sans-serif;
        border-top-left-radius:10px;
        cursor: pointer;
        box-shadow: rgba(21, 23, 26, 0.2) 0px 8px 24px;
    }

   button::before{
   content: 'Submit';
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: var(--primary);
   transform: scaleX(0);
   transition: transform 0.5s ease-in-out;
   transform-origin:right ;
   transition-delay: .05s;
   color: white;
   border-top-left-radius:10px;
   border-left:1px solid var(--primary);
} 

 button:hover{
    color: white;
 }

   button:hover::before {
        transform: scaleX(1);
        transition: transform 0.5s ease-in-out;
        transform-origin:right ;
        transition-delay: 0; 
   }
`

export const ContactInputFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
`

export const ContactIcon = styled.div`
     display: flex;
     justify-content: center;
     position: absolute;
     top: 30%;
     left: 2%;
     transform: translateX(-2%), translateY(-30%);
     font-size:2.2rem;
     color: var(--primary);


    &::after{
        content: '';
        position: absolute;
        height: 2.5rem;
        width: .2rem;
        margin-left:.5rem;
        background-color: var(--lightgrey);
        top: 0;
        left: 100%;
    }
`

export const ContactTextArea = styled.div`
     display: flex;
     justify-content: center;
     position: absolute;
     top: 10%;
     left: 2%;
     transform:translateY(-10%);
     font-size:2.2rem;
     color: var(--primary);


    &::after{
        content: '';
        position: absolute;
        height: 2.5rem;
        width: .2rem;
        margin-left:.5rem;
        background-color: var(--lightgrey);
        top: 0;
        left: 100%;
    }
`

export const ContactButtonIcon = styled.div` 
       display: flex;
       justify-content: center;
       align-items: center;
       font-size: 2rem;
       background-color: var(--primary);
       padding: 0 1rem;
       border-bottom-right-radius:10px;
       color: white;      
       margin-right: .4rem;
`