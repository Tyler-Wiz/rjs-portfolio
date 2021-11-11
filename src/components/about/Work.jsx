import CountUp from "react-countup"
import { SectionContainer } from "../styled/Container.styled"
import * as BsIcons from 'react-icons/bs'
import * as GiIcons from 'react-icons/gi'
import { ToggleVisibility } from "../../utilities/ToggleVisibility"
import { StyledWork } from "../styled/Work.Styled"

export const Work = () => {
    const [isVisible] =ToggleVisibility()

    return (
        <SectionContainer>
            {isVisible ? 
            <StyledWork>
                <li>
                    <h3><BsIcons.BsFillPeopleFill /></h3>
                    <h4><CountUp end={600} duration={5}/><sup>+</sup></h4>
                    <h5>Happy Clients</h5>
                </li>
                <li>
                    <h3><GiIcons.GiCoffeeCup /></h3>
                    <h4><CountUp end={700} duration={5}/><sup>+</sup></h4>
                    <h5>Coffee Cups</h5>
                </li>
                <li>
                    <h3><GiIcons.GiTeamIdea /></h3>
                    <h4><CountUp end={3320} duration={5}/><sup>+</sup></h4>
                    <h5>Working Hours</h5>
                </li>
                <li>
                    <h3><BsIcons.BsCodeSlash /></h3>
                    <h4><CountUp end={53100} duration={5}/><sup>+</sup></h4>
                    <h5>Lines Of Code</h5>
                </li>
            </StyledWork>
            : ''}
        </SectionContainer>
    )
}
