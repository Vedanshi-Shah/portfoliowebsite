import React from 'react';
import { InfoContainer, TopLine, Heading, Subtitle,Img,BtnWrap} from './AboutMeElements';
import { Button } from '../ButtonElement';
const AboutMe = ({lightBg,topLine,lightText,darkText,headLine,description,description2,img,alt}) => {
    return (
        <>
        <InfoContainer lightBg={lightBg}>

                            
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Img src={img} alt={alt}/>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <br />
                            <Subtitle darkText={darkText}>{description2}</Subtitle>
                            <br />
                            <br />
                            <BtnWrap>
                            <Button to="/"
                                smooth={true}
                                duration={true}
                                spy={true}
                                exact="true"
                                primary={1}
                                dark={1}
                                dark2={1}
                            >Back Home</Button></BtnWrap>
        </InfoContainer>
        </>
    )
}

export default AboutMe
