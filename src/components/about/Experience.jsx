import React from 'react'
import * as MdIcons from 'react-icons/md'
import { Flex } from '../styled/Flex'
import { StyledEducation, EducationIcon } from '../styled/Education.Styled'

export const Experience = ({item:{year,position,metaInfo}}) => {
    return (
        <div>
            <Flex>
                <EducationIcon>
                    <MdIcons.MdSchool />
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