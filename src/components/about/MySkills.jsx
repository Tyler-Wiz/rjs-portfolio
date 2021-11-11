import { useEffect, useState } from "react"
import { Flex } from '../styled/Flex'
import { StyledSkills } from "../styled/Skills.Styled";


export const MySkills = ({item:{name, percentage}}) => {
    const [style, setStyle] = useState({});
    const [bar, setBar] = useState('80')
    
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${bar}%`
		}
		setStyle(newStyle);
	}, 300);

    useEffect(() => {
        if(name === 'HTML') setBar('78')
        if(name === 'PHP') setBar('60')
        if(name === 'UI/UX Design') setBar('75')
        if(name === 'Vue') setBar('90')
        if(name === 'React') setBar('75')
        if(name === 'Angular') setBar('65')
        if(name === 'CSS') setBar('90')
        if(name === 'JQuery') setBar('80')
    }, [bar, name])


    return (
        <li>
            <Flex>
                <h4>{name}</h4>
                <h5>{percentage}</h5>
            </Flex>
            <StyledSkills>
                <div style={style}></div>
            </StyledSkills>
        </li>    
    
    )
}
