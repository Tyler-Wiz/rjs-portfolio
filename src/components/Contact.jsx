import { SectionContainer } from "./styled/Container.styled"
import { StyledContact, ContactInputFlex, ContactIcon, ContactTextArea, ContactButtonIcon } from "./styled/Contact.Styled"
import * as HiIcons from 'react-icons/hi'
import * as BsIcons from 'react-icons/bs'
import * as TiIcons from 'react-icons/ti'
import * as FiIcons from 'react-icons/fi'
import { Flex } from "./styled/Flex"

export const Contact = () => {
    return (
        <SectionContainer Bg='white'>
            <StyledContact action="">
            <h3>Get In Touch With Me</h3>
                <ContactInputFlex>
                <ContactIcon>
                  <BsIcons.BsFillPersonFill />
                </ContactIcon>
                    <input 
                        type='text'
                        name='name'
                        placeholder='name here'
                    />
                </ContactInputFlex>
                <ContactInputFlex>
                <ContactIcon>
                  <HiIcons.HiMail />
                </ContactIcon>
                    <input 
                        type='email'
                        name='email'
                        placeholder='Your Email '
                    />
                </ContactInputFlex>
                <ContactInputFlex>
                    <ContactIcon>
                        <HiIcons.HiPhone />
                    </ContactIcon>
                    <input 
                        type='text'
                        name='phone'
                        placeholder='phone'
                    />
                </ContactInputFlex>
                <ContactInputFlex> 
                    <ContactTextArea>
                        <TiIcons.TiMessageTyping/>
                    </ContactTextArea>
                    <textarea
                        name="" 
                        id="" 
                        cols="30" 
                        rows="10" 
                        placeholder='Typing Your Message Here'> 
                    </textarea>
                </ContactInputFlex>
                  <Flex>
                    <button>
                        Submit
                    </button>
                    <ContactButtonIcon>
                        <FiIcons.FiSend/>
                    </ContactButtonIcon>
                  </Flex>
                   
                
            </StyledContact> 
        </SectionContainer>
    )
}
