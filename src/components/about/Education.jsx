import React from 'react'
import * as FaIcons from 'react-icons/fa'
import { Flex } from '../styled/Flex'
import { StyledEducation, EducationIcon } from '../styled/Education.Styled'

export const Education = ({item:{year,school,degree}}) => {
    return (
        <div>
            <Flex>
                <EducationIcon>
                    <FaIcons.FaBook />
                </EducationIcon>
                <StyledEducation>
                    <h5>{year}</h5>
                    <h4>{school}</h4>
                    <p>{degree}</p>
                </StyledEducation>
            </Flex>
        </div>
    )
}
