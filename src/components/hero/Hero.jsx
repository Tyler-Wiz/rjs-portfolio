import * as FaIcons from 'react-icons/fa'
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion'
import { bounce } from '../../utilities/Animations'
import { Social } from '../Social';
import { Nav } from '../Nav';
import { Container } from '../styled/Container.styled';
import { StyledHero,Arrow } from '../styled/Hero.Styled';
import { ButtonStyled } from '../styled/Button.Styled';

export const Hero = () => {
    return (
        <StyledHero>
            <Container>
                <h1> Hi,</h1>
                <h2>
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
                <h3>I design and develop experiences that make people's live<span>Simple</span></h3>
                
                <ButtonStyled>See Portfolio</ButtonStyled>

                <Arrow>
                    <motion.div 
                    variants={bounce}
                    initial='hidden'
                    animate='visible'
                    >
                        <FaIcons.FaArrowDown />
                    </motion.div>
                </Arrow>

            <Social />
            <Nav/>
            </Container>
        </StyledHero>
    )
}
