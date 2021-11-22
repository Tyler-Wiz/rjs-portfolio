import * as FaIcons from 'react-icons/fa'
import Typewriter from 'typewriter-effect';
import { Social } from '../Social';
import { Nav } from '../Nav';
import { Container, Arrow, Button } from '../styled/Hero.Styled';

export const Hero = () => {
    return (
        <Container>
            <h1> I'm Natalie Williams</h1>
            {/* Homepage Typewriter Effect */}
            <h1>
                    <Typewriter
                        options={{
                        strings: [
                        "A Photographer",
                        "A Front End Web-Developer",
                        "A UI/UX Designer",
                        "A Wordpress Theme Developer",
                        ],
                        autoStart: true,
                        loop: true,
                        cursorClassName:'hero_cursor',
                        delay:50
                        }}
                    />
            </h1>
            <h3>I design and develop experiences that make people's live<span>Simple</span></h3>
            
            {/* Homepage Portfolio Button */}
            <Button>See Portfolio</Button>

        {/* Homepage ClickDown Arrow */}
                <Arrow>
                   <FaIcons.FaArrowDown />
                </Arrow>
           <Social />
           <Nav/>
        </Container>
    )
}
