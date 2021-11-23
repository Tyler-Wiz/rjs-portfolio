import * as FaIcons from 'react-icons/fa'
import styled from 'styled-components'

const Container = styled.ul`
    display: flex;
    list-style: none;
`
const SocialIcons = styled.li`
    width: 35px;
    font-size:2.2rem;
    margin-left:.3rem;
    border-radius:50%;

    a {
        color: ${({ theme }) => theme.primary};
    }
`

export const Social = () => {
    return (

   <Container>
           <SocialIcons>
                <a href='https://github.com/Tyler-Wiz' >
                    <FaIcons.FaGithub />
                </a>
           </SocialIcons>
           <SocialIcons>
                <a href='https://github.com/Tyler-Wiz' >
                    <FaIcons.FaTwitter  />
                </a>
           </SocialIcons>
           <SocialIcons>
                <a href='https://github.com/Tyler-Wiz' >
                    <FaIcons.FaYoutube />
                </a>
           </SocialIcons>
           <SocialIcons>
                <a href='https://github.com/Tyler-Wiz'>
                   <FaIcons.FaDribbble  />
                </a>
           </SocialIcons>
           <SocialIcons>
                <a href='https://github.com/Tyler-Wiz'>
                    <FaIcons.FaLinkedinIn />
                </a>
           </SocialIcons>
    </Container> 
    )
}
