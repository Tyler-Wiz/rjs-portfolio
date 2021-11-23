import * as FaIcons from 'react-icons/fa'
import { StyledEducation, EducationIcon, Container } from '../styled/Education.Styled'

export const Experience = ({item:{year,position,metaInfo}}) => {
    return (
        <Container>
            <EducationIcon>
                <FaIcons.FaBriefcase />
            </EducationIcon>
            <StyledEducation>
                <h5>{year}</h5>
                <h4>{position}</h4>
                <p>{metaInfo}</p>
            </StyledEducation>
        </Container>
    )
}