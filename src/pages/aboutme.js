import React from 'react';
import AboutMe from '../components/AboutMe';
import { aboutContent } from '../components/AboutMe/content';

const aboutme = () => {
    return (
        <AboutMe {...aboutContent} />
    )
}

export default aboutme
