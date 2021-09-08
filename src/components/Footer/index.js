import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink} from './FooterElements';
import { FaGithub,FaInstagram,FaFacebook,FaLinkedinIn } from "react-icons/fa";
import './Footer.css';
const Footer = () => {

    // const toggleHome=()=>{
    //     scroll.scrollToTop();
    // };

    return (
        <div>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Connect With Me</FooterLinkTitle>
                                <FooterLink><a href="https://github.com/Vedanshi-Shah" className="social-icons"><FaGithub /></a>&emsp;<a href="https://www.instagram.com/v3danshi_shah/" className="social-icons"><FaInstagram /></a>&emsp;<a href="https://www.facebook.com/vedanshi.shah.50/" className="social-icons"><FaFacebook /></a>&emsp;<a href="https://www.linkedin.com/in/vedanshi-shah-2835501b8" className="social-icons"><FaLinkedinIn /></a></FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    
                </FooterLinksContainer>
                <div>Made with ❤️ by Vedanshi</div>
            </FooterWrap>
            
        </FooterContainer>
        </div>
    )
}

export default Footer
