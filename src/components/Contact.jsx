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

                {/* handle Name Required Errors */}
                {errors.name && errors.name.type === "required" && (
                        <p>Name is required</p>
                 )}

                 {/* Contact Name Ends */}

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

                {/* handle Email Required Errors */}
                {errors.email && ( <p>{errors.email.message}</p> ) }

                {/* Contact Email Ends */}        

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

                {/* handle PhoneNumber Required Errors */}
                {errors.email && ( <p>{errors.phone.message}</p> ) }
 
                {/* Contact PhoneNumber Ends */}  

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

                {/* handle Message Required Errors */}
                {errors.name && errors.message.type === "required" && (
                        <p>Message is required</p>
                    )}
            
                 {/* Contact Message Ends */}  

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
