import { NavData } from './data/NavData'
import { Toggle } from '../utilities/Toggle'
import { hamburger } from './data/NavData'
import { StyledNav, HamburgerIcons } from './styled/Nav.Styled'

export const Nav = () => {
    const [IsOpen, openElement] = Toggle()

    return (
        <div>  
            <HamburgerIcons onClick={openElement}>
                  {IsOpen ? <span>{hamburger.close}</span> : <span>{hamburger.menu}</span> }
            </HamburgerIcons>
            <StyledNav visibility={IsOpen} >
                <ul>
                    {NavData.map((item, id) => (
                        <li key={id}>
                            <a href={item.path}>
                                <h4>{item.icon}</h4>
                                <h3>{item.title}</h3>
                            </a>
                        </li>
                    ))}
                </ul>
            </StyledNav>
        </div>
    )
}
