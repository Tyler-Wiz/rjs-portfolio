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
                     
                </ContactInputFlex>
                {errors.name && errors.name.type === "required" && (
                        <p>Name is required</p>
                 )}

                <ContactInputFlex>
                    <ContactIcon>
                        <HiIcons.HiMail />
                    </ContactIcon>
                    <input 
                        {...register(
                            "email",
                            {
                              required: "Email is Required",
                              pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Entered value does not match email format",   
                              },
                            },
                            { required: true }
                          )}
                        type='email'
                        name='email'
                        placeholder='Your Email '
                    />
                </ContactInputFlex>

                {errors.email && ( <p>{errors.email.message}</p> ) }

                <ContactInputFlex>
                    <ContactIcon>
                        <HiIcons.HiPhone />
                    </ContactIcon>
                    <input 
                        {...register(
                        "phone",
                        {
                          required: "Email is Required",
                          pattern: {
                            value: /^\d{10}$/,
                            message: "Entered value does not match phone format",
                          },
                        },
                        { required: true }
                       )}
                        type='text'
                        name='phone'
                        placeholder='phone'
                    />
                     
                </ContactInputFlex>

                {errors.email && ( <p>{errors.phone.message}</p> ) }

                <ContactInputFlex> 
                    <ContactTextArea>
                        <TiIcons.TiMessageTyping/>
                    </ContactTextArea>
                    <textarea
                       {...register("message", { required: true })}
                        name="message" 
                        id="" 
                        cols="30" 
                        rows="10" 
                        placeholder='Typing Your Message Here'
                    > 
                    </textarea>
                    
                </ContactInputFlex>

                {errors.name && errors.message.type === "required" && (
                        <p>Message is required</p>
                    )}
            
                 

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
