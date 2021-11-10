import { aboutMe, Avatar } from "../data/AboutData"

export const About = () => {
    const {img} = Avatar
    
    return (
        <section className='about_index'>
        <div>
            <img className='about_img' src={img} alt="" />
        </div>
        <ul>
          {aboutMe.map((item, id) => (
            <li key={id}>
                {item.meta}:{item.metaInfo}
            </li>
                ))}
        </ul>
    </section>
    )
}
