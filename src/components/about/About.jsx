import { aboutMe, Avatar } from "../data/AboutData"
import { MySkills } from "./MySkills"
import { SkillData } from '../data/SkillData'
import { ToggleVisibility } from "../../utilities/ToggleVisibility"
import { SectionContainer } from '../styled/Container.styled'
import { StyledAbout } from "../styled/About.Styled"
import { Work } from "./Work"
import { EducationData, AchievementData } from "../data/E&AData"
import { Education } from "./Education"
import { Experience } from "./Experience"
import { Title } from "../styled/Title"

export const About = () => {
    const {img} = Avatar
    const[isVisible] = ToggleVisibility()

    return (
        <>
        <StyledAbout>
            <Title color='var(--background)'>
                About Me
            </Title>
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
            <Title color='var(--background)'>
                Education & Experience
            </Title>
            <SectionContainer>
                <ul>
                    {EducationData.map((data, i) => (
                        <Education key={i} item={data}/>
                    ))}
                </ul>
            </SectionContainer>
            <SectionContainer>
                <ul>
                    {AchievementData.map((item, i) => (
                        <Experience key={i} item={item}/>
                    ))}
                </ul>
            </SectionContainer>
        </StyledAbout>
       </>

    )
}
