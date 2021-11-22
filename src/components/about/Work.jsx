import CountUp from "react-countup"
import * as BsIcons from 'react-icons/bs'
import * as GiIcons from 'react-icons/gi'
import { ToggleVisibility } from "../../utilities/ToggleVisibility"
import { Container } from "../styled/Work.Styled"

export const Work = () => {
    const [isVisible] =ToggleVisibility()

    return (
        <>
            {isVisible ? 
            <Container>
                <li>
                    <div>
                        <h3><BsIcons.BsFillPeopleFill /></h3>
                        <h4><CountUp end={600} duration={5}/><sup>+</sup></h4>
                    </div>
                    <h5>Happy Clients</h5>
                </li>
                <li>
                    <div>
                        <h3><GiIcons.GiCoffeeCup /></h3>
                        <h4><CountUp end={700} duration={5}/><sup>+</sup></h4>
                    </div>
                    <h5>Coffee Cups</h5>
                </li>
                <li>
                    <div>
                        <h3><GiIcons.GiTeamIdea /></h3>
                        <h4><CountUp end={3320} duration={5}/><sup>+</sup></h4>
                    </div>
                    <h5>Working Hours</h5>
                </li>
                <li>
                    <div>
                        <h3><BsIcons.BsCodeSlash /></h3>
                        <h4><CountUp end={53100} duration={5}/><sup>+</sup></h4>
                    </div>
                    <h5>Lines Of Code</h5>
                </li>
            </Container>
            : ''}
       </>
    )
}
