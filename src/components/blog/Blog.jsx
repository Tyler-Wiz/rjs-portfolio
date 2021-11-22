import { BlogData } from '../data/Data.jsx'
import { Container } from "../styled/Blog.Styled"
import { ToggleVisibility } from "../../utilities/ToggleVisibility"
import { Title, DestkopTitle } from "../styled/About.Styled"


export const Blog = () => {

    const [isVisible] =ToggleVisibility()

    return (
        
        <>
            <Title>
              Blog Post
            </Title>
            <DestkopTitle>
                <h1>Latest</h1>
                <h2>Blog Post</h2>
            </DestkopTitle>
            {isVisible ? <Container>
            {BlogData.map((item, i) => (
                   <li key={i}>
                      <img src={item.imgUrl} alt="" />
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                   </li>
                ))}
            </Container> 
            : null }
        </>
    )
}