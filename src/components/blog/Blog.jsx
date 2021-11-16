import { SectionContainer } from "../styled/Container.styled"
import { BlogData } from "../data/BlogData"
import { StyledBlog } from "../styled/Blog.Styled"
import { Title } from "../styled/Title"

export const Blog = () => {
    return (
        <SectionContainer Bg='white'>
            <Title color='var(--background)'>
                Blog Post
            </Title>
            <StyledBlog>
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
        </SectionContainer>
    )
}