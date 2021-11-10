import { aboutMe, Avatar } from "../data/AboutData"
import { MySkills } from "./MySkills"

export const About = () => {
    const {img} = Avatar
    
    return (
        <section className='about_index'>
            <div>
                <img className='about_img' src={img} alt="" />
            </div>
            <ul className='about_info'>
            {aboutMe.map((item, id) => (
                    <li key={id}>
                        <p>{item.meta}:</p> 
                        <p className='about_metainfo'>{item.metaInfo}</p> 
                    </li>
                ))}
            </ul>
            <MySkills/>
       </section>
    )
}
