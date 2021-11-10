import * as FaIcons from 'react-icons/fa'

export const Social = () => {
    return (
        <div className='social_container'>
            <a href='https://github.com/Tyler-Wiz' className='social github' >
                <FaIcons.FaGithub />
            </a>
            <a href='https://github.com/Tyler-Wiz' className='social twitter'>
                <FaIcons.FaTwitter  />
            </a>
            <a href='https://github.com/Tyler-Wiz' className='social youtube'>
               <FaIcons.FaYoutube />
            </a>
            <a href='https://github.com/Tyler-Wiz' className='social dribble'>
               <FaIcons.FaDribbble  />
            </a>
            <a href='https://github.com/Tyler-Wiz' className='social linkedin'>
                <FaIcons.FaLinkedinIn />
            </a>
        </div>   
    )
}
