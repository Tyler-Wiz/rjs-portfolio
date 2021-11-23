import { StlyedAddress, AddressDtl } from "./styled/Address.Styled"
import * as HiIcons from 'react-icons/hi'
import { Social } from "./Social"


const AddressData = {
    address:'232 WestEnd Road Cambridge, United Kingdom',
    email:'hello@yourwebsite.com',
    phone:'+44 627 8199 282'
}

export const Address = () => {

    const {address, email, phone} = AddressData

    return (
        <>
            <StlyedAddress>
                <h2>Contact Me</h2>

                <AddressDtl>
                    <HiIcons.HiLocationMarker/>
                    <h5>{address}</h5>
                </AddressDtl>

                <AddressDtl>
                    <HiIcons.HiMail />  
                    <h5>{email}</h5>
                </AddressDtl>
                <AddressDtl>
                    <HiIcons.HiPhone />
                    <h5>{phone}</h5> 
                </AddressDtl>
                
                <Social/>
            </StlyedAddress>
            
        </>
    )
}
