import * as FaIcons from 'react-icons/fa'
import * as BsIcons from 'react-icons/bs'
import * as VscIcons from 'react-icons/vsc'

export const NavData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />,
    },
    {
        title: 'About',
        path: '/about',
        icon: <BsIcons.BsPerson />, 
    },
    {
        title: 'Services',
        path: '/Services',
        icon: <FaIcons.FaUsersCog />,
    },
    {
        title: 'Projects',
        path: '/Projects',
        icon: <VscIcons.VscServerProcess />,
    },
    {
        title: 'Blog',
        path: '/Blog',
        icon: <BsIcons.BsNewspaper />,
    
    },
    {
        title: 'Contact',
        path: '/Contact',
        icon: <FaIcons.FaEnvelope />,
    }
]

export const hamburger = {
     menu:<FaIcons.FaHamburger/>,
     close:<FaIcons.FaWindowClose/>
}