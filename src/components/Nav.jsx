import { NavData } from './data/NavData'
import { Toggle } from '../utilities/Toggle'
import { hamburger } from './data/NavData'

export const Nav = () => {
    const [IsOpen, openElement] = Toggle()

    return (
        <div>
            <div>
                <div className='nav_burger' onClick={openElement}>
                    {IsOpen ? <span>{hamburger.close}</span> : <span>{hamburger.menu}</span> }
                </div>
            </div>
            <ul className={IsOpen ? 'nav_container toggle' : 'nav_container' }>
                {NavData.map((item, id) => (
                    <li key={id}>
                        <a className='nav_list' href={item.path}>
                            <div className='link_wrapper'>
                                <h3 className='nav_icon'>{item.icon}</h3>
                                <h3 className='nav_title'>{item.title}</h3>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
