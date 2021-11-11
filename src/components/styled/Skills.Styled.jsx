import styled from "styled-components";

export const StyledSkills = styled.div`
    width: 100%;
    height: .7rem;
    background-color: white;
    margin-bottom: 1rem;
    border-radius: 10px;


    & > div {
        background: var(--primary);
        box-shadow: 0 3px 3px -5px var(--primaryPink), 0 2px 5px var(--secondary);
        border-radius: 20px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 0;
        opacity: 0;
        transition: 1s ease 0.3s;
        }
`