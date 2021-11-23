import styled from "styled-components";

export const Wrapper = styled.section`
    padding: 1.3rem;
    background-color: ${({ theme }) => theme.background}; 
    color: ${({ theme }) => theme.text}; 
`

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 1200px; 
    margin: 3rem auto;

    @media (min-width:750px) {
        flex-direction: row;
        align-items:center;

         img{
             display: none;
         }
    }
`

export const AboutImg = styled.img`
    display: block;
    width: 30rem;
    height: 30rem;
    margin: 4rem auto;
    border-radius: 50%;
    border: 6px solid ${({ theme }) => theme.background};
`

export const AboutInfo =styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style-type: none;
    text-transform: capitalize;
    margin-bottom: 4rem;
    flex: 1;
    font-weight: 200;


    li {
       padding: 1rem;
    }

    h5{
        font-weight: 600;
    }

    @media (min-width:750px) {
        margin-bottom: 0;
    }

`

export const DestkopTitle = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
   
    h1 {
        font-size: 6rem;
        opacity: .1;
        font-weight:900;
        z-index: 1;
    }

    h2 {
        position: absolute;
        z-index: 2;
        opacity:1;
        font-weight: 700;
    }

    h2::after{
        content: '';
        height: 0.1rem;
        width: 50%;
        margin: 0 auto;
        background-color: ${({ theme }) => theme.primary};
        position: absolute;
        top: 80%;
        left: 0;
        right: 0;
    }

    @media (min-width:750px) {
        display: flex;
    }
`

export const Title = styled.h2`
    padding: 1rem;
    position: relative;
    text-align: left;
    display: inline-block;
    text-transform: uppercase;
    font-weight: 700;
    color: ${({ theme }) => theme.primary};

    &::after{
        content: '';
        height: 0.1rem;
        width: 50%;
        margin: 0 auto;
        background-color: ${({ theme }) => theme.primary};
        position: absolute;
        top: 80%;
        left: 0;
        right: 0;
    }

    @media (min-width:750px) {
        display: none;
    }
`

export const SkillsWrapper = styled.ul`
       max-width: 1200px;
       margin: 0 auto;
       display: grid;
       grid-template-columns:repeat(2, 1fr);
       list-style: none;
       margin: 3rem auto;

       li{
           padding: 1.3rem;
       }

       @media (max-width:750px) {
        display: flex;
        flex-direction: column;

        li{
           padding: .2rem;
       }
    }
     
`
export const ExperienceWrapper = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
      margin-bottom: 3rem;

      ul{
        flex:1;
       }

     li{
         padding: 1rem;
     }

      @media (min-width:750px) {
        flex-direction: row;
        align-items: center;
    }
`