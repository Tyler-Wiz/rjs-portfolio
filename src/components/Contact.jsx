import { SectionContainer } from "./styled/Container.styled"
import { StyledContact } from "./styled/Contact.Styled"

export const Contact = () => {
    return (
        <SectionContainer>
            <StyledContact action="">
                <input 
                type='text'
                name='name'
                placeholder='name here'
                />
                <input 
                type='email'
                name='email'
                placeholder='Your Email '
                />
                <input 
                type='text'
                name='phone'
                placeholder='phone'
                />
                <textarea 
                name="" 
                id="" 
                cols="30" 
                rows="10" 
                placeholder='Your message here'>
                    
                </textarea>
                <button>Submit</button>
            </StyledContact> 
        </SectionContainer>
    )
}
