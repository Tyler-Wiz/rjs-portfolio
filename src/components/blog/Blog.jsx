
import { BlogData } from '../data/Data.jsx'
import { StyledBlog } from "../styled/Blog.Styled"
import { Title } from "../styled/Title"
import { ToggleVisibility } from "../../utilities/ToggleVisibility"

export const Blog = () => {

    const [isVisible] =ToggleVisibility()

    return (
        
        <>
            <Title color='var(--background)'>
                Blog Post
            </Title>
            {isVisible ? <StyledBlog>
            {BlogData.map((item, i) => (
                   <li key={i}>
                      <img src={item.imgUrl} alt="" />
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                   </li>
                ))}
            </StyledBlog> 
            : null }
        </>
    )
}