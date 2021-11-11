import { aboutMe, Avatar } from "../data/AboutData"
import { MySkills } from "./MySkills"
import { SkillData } from '../data/SkillData'
import { ToggleVisibility } from "../../utilities/ToggleVisibility"
import { SectionContainer } from '../styled/Container.styled'
import { StyledAbout } from "../styled/About.Styled"
import { Work } from "./Work"

export const About = () => {
    const {img} = Avatar
    const[isVisible] = ToggleVisibility()

    return (
        <>
        <StyledAbout>
            <div>
                <img src={img} alt="" />
            </div>
            <ul>
            {aboutMe.map((item, id) => (
                    <li key={id}>
                        <p>{item.meta}:</p> 
                        <h5>{item.metaInfo}</h5> 
                    </li>
                ))}
            </ul>
            <SectionContainer>
                {isVisible ? <ul>
                {SkillData.map((item, i) => (
                        <MySkills key={i} item={item}/>
                    ))}
                </ul> : ''}
            </SectionContainer>
            <Work/>
        </StyledAbout>
        
        
       </>

    )
}
