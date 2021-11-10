import { SkillData } from '../data/SkillData'

export const MySkills = () => {
    return (
        <div>
            {SkillData.map((item, id) => (
                <div>
                    {item.name}
                </div>
            ))}
        </div>
    )
}
