import { NavData } from './data/Data'
import { Toggle } from '../utilities/Toggle'
import { hamburger } from './data/Data'
import { Container, Hamburger } from './styled/Nav.Styled'

export const Nav = () => {
    const [IsOpen, openElement] = Toggle()
    return (
        <>  
            <Hamburger onClick={openElement}>
                  {IsOpen ? <span>{hamburger.close}</span> : <span>{hamburger.menu}</span> }
            </Hamburger>
            <Container ShowMenu={IsOpen} >
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
            </Container>
        </>
    )
}
