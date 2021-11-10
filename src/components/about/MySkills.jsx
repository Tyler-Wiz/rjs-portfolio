import { SkillData } from '../data/SkillData'

export const MySkills = () => {

    return (
        <div>
            <ul className='skill_container'>
                {SkillData.map((item, id) => (
                    <li key={id} >
                        <div className='skill_info'>
                            <h4>{item.name}</h4>
                            <h5>{item.percentage}</h5>
                        </div>
                    <div className='skill_progress--bar'>
                        <div className={item.cName}>
                        </div>
                    </div>
                       
                    </li>
                ))}
            </ul>
            
        </div>
    )
}
