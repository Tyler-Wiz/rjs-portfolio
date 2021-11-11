import React from 'react'
import * as MdIcons from 'react-icons/md'
import { Flex } from '../styled/Flex'
import { StyledEducation, EducationIcon } from '../styled/Education.Styled'

export const Education = ({item:{year,school,degree}}) => {
    return (
        <div>
            <Flex>
                <EducationIcon>
                    <MdIcons.MdSchool />
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
