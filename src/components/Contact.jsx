import { SectionContainer } from "./styled/Container.styled"
import { StyledContact, ContactInputFlex, ContactIcon, ContactTextArea, ContactButtonIcon } from "./styled/Contact.Styled"
import * as HiIcons from 'react-icons/hi'
import * as BsIcons from 'react-icons/bs'
import * as TiIcons from 'react-icons/ti'
import * as FiIcons from 'react-icons/fi'
import { Flex } from "./styled/Flex"
import { Address } from "./Address"
import { useForm } from 'react-hook-form'

export const Contact = () => {

    const {
        register,
        handleSubmit,
        formState:{ errors}
    } = useForm()
    
    const onSubmit = (data, e) => {
        e.target.reset();
        console.log("Message submited: " + JSON.stringify(data));
    }

    return (
        <SectionContainer Bg='white'>
          <StyledContact action="" onSubmit={handleSubmit(onSubmit)}>
            <h3>Get In Touch With Me</h3>
                <ContactInputFlex>
                    <ContactIcon>
                        <BsIcons.BsFillPersonFill />
                    </ContactIcon>
                    <input 
                       {...register("name", { required: true })}
                        type='text'
                        name='name'
                        placeholder='name here'
                    />
                     {errors.name && errors.name.type === "required" && (
                        <span>Name is required</span>
                     )}
                </ContactInputFlex>
                <ContactInputFlex>
                    <ContactIcon>
                        <HiIcons.HiMail />
                    </ContactIcon>
                    <input 
                        {...register("email", { required: true })}
                        type='email'
                        name='email'
                        placeholder='Your Email '
                    />
                    {errors.name && errors.email.type === "required" && (
                        <span>Your Email is required</span>
                     )}
                </ContactInputFlex>
                <ContactInputFlex>
                    <ContactIcon>
                        <HiIcons.HiPhone />
                    </ContactIcon>
                    <input 
                        type='text'
                        name='phone'
                        placeholder='phone'
                        {...register("phone", {
                            required: "required",
                          })}
                    />
                </ContactInputFlex>
                <ContactInputFlex> 
                    <ContactTextArea>
                        <TiIcons.TiMessageTyping/>
                    </ContactTextArea>
                    <textarea
                        name="message" 
                        id="" 
                        cols="30" 
                        rows="10" 
                        placeholder='Typing Your Message Here'
                        {...register("message", {
                            required: "required",
                          })}
                    > 
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
            <Address />
        </SectionContainer>
    )
}
