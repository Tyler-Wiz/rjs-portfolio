import * as FaIcons from 'react-icons/fa'
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion'
import { bounce } from '../../utilities/Animations'
import { Social } from '../Social';

export const Hero = () => {
    return (
    <div className='intro'>
        <h3 className='intro_name'> Hi,</h3>
        <h2>
           <span className='intro_typing'>
                <Typewriter
                    options={{
                    strings: [
                    "I'm A Photographer",
                    "I'm A Front End Web-Developer",
                    "I'm A UI/UX Designer",
                    "I'm A Wordpress Theme Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    cursorClassName:'typing_cursor',
                    delay:50
                    }}
                />
           </span>
        </h2>
        <h3>I design and develop experiences that make people's live<span className='intro_span'>Simple</span></h3>
        <h3 className='intro_portfolio'>See Portfolio</h3>
        <motion.div 
          variants={bounce}
          initial='hidden'
          animate='visible'
          className='arrow_down'
          >
              <FaIcons.FaArrowDown />
        </motion.div>
        <Social />
    </div>
    )
}
