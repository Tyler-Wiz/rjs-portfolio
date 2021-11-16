import React from 'react'
import * as FaIcons from 'react-icons/fa'
import { Flex } from '../styled/Flex'
import { StyledEducation, EducationIcon } from '../styled/Education.Styled'

export const Experience = ({item:{year,position,metaInfo}}) => {
    return (
        <div>
            <Flex>
                <EducationIcon>
                    <FaIcons.FaBriefcase />
                </EducationIcon>
                <StyledEducation>
                    <h5>{year}</h5>
                    <h4>{position}</h4>
                    <p>{metaInfo}</p>
                </StyledEducation>
            </Flex>
        </div>
    )
}