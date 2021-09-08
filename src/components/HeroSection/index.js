import React, {useState} from 'react'
import Video from '../../videos/video.mp4';
import { NavLinks,HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrorForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElement';
import Typewriter from 'typewriter-effect';
const HeroSection = () => {
    const [hover,setHover]=useState(false);
    const onHover=()=>{
        setHover(!hover);
    }
    return (
        <HeroContainer id="hero">
            <HeroBg>
                <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Vedanshi Shah</HeroH1>
                <HeroP>
                    <Typewriter 
                        onInit={(typewriter)=>{
                        typewriter
                        .typeString("Web Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Explorer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("ML Enthusiast")
                        .start();
                        }}
                    />
                </HeroP>
                <HeroBtnWrapper>
                    <NavLinks to="about" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >
                        Get Started {hover?<ArrorForward />:<ArrowRight />}
                    </NavLinks>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
