import * as FaIcons from 'react-icons/fa'
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion'
import { bounce } from '../../utilities/Animations'
import { Social } from '../Social';
import { Nav } from '../Nav';

export const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero_container'>
                <h1> Hi,</h1>
                <h2 className='hero_typing'>
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
                            cursorClassName:'hero_cursor',
                            delay:50
                            }}
                        />
                </h2>
                <h3>I design and develop experiences that make people's live<span className='hero_span'>Simple</span></h3>
                <h3 className='hero_portfolio'>See Portfolio</h3>
                <motion.div 
                variants={bounce}
                initial='hidden'
                animate='visible'
                className='arrow_down'
                >
                    <FaIcons.FaArrowDown />
                </motion.div>
                <Social />
                <Nav/>
            </div>
        </section>
    )
}
