import * as FaIcons from 'react-icons/fa'
import { StyledEducation, EducationIcon, Container } from '../styled/Education.Styled'

export const Education = ({item:{year,school,degree}}) => {
    return (
        <Container>
            <EducationIcon>
                <FaIcons.FaBook />
            </EducationIcon>
            <StyledEducation>
                <h5>{year}</h5>
                <h4>{school}</h4>
                <p>{degree}</p>
            </StyledEducation>
        </Container>
    )
}
