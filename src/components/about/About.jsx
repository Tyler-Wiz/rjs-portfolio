import { aboutMe, Avatar } from '../data/Data.jsx'
import { MySkills } from "./MySkills"
import { SkillData } from '../data/Data.jsx'
import { ToggleVisibility } from "../../utilities/ToggleVisibility"
import { Container, Title, Wrapper, SkillsWrapper, DestkopTitle,AboutImg, AboutInfo,ExperienceWrapper } from "../styled/About.Styled"
import { Work } from "./Work"
import { EducationData, AchievementData } from '../data/Data.jsx'
import { Education } from "./Education"
import { Experience } from "./Experience"


export const About = () => {
    const {img} = Avatar
    const[isVisible] = ToggleVisibility()

    return (
        <Wrapper>
            <Title>About Me </Title>
            <DestkopTitle>
                <h1>My Resume</h1>
                <h2>About Me</h2>
            </DestkopTitle>
            <Container> 
                <AboutImg src={img} alt="" />
                <AboutInfo>
                {aboutMe.map((item, id) => (
                        <li key={id}>
                            <p>{item.meta}:</p> 
                            <h5>{item.metaInfo}</h5> 
                        </li>
                    ))}
                </AboutInfo>
                <Work/>
            </Container>
        
            <Title>My Skills</Title>
            <DestkopTitle>
                <h1>Skills</h1>
                <h2>MY Skills</h2>
            </DestkopTitle>
                {isVisible ? <SkillsWrapper>
                    {SkillData.map((item, i) => (
                            <MySkills key={i} item={item}/>
                        ))}
                </SkillsWrapper> : ''}
           
           
            <Title>Education & Experience</Title>
            <DestkopTitle>
                <h1>Skills</h1>
                <h2>Education & Experience</h2>
            </DestkopTitle>
              <ExperienceWrapper>
                <ul>
                    {EducationData.map((data, i) => (
                            <Education key={i} item={data}/>
                     ))}
                </ul>
                <ul>
                    {AchievementData.map((item, i) => (
                            <Experience key={i} item={item}/>
                    ))}
                </ul>
              </ExperienceWrapper>
               
          
       </Wrapper>

    )
}
