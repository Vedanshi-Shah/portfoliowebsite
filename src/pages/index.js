import React,{useState} from 'react';
import Sidebar from '../components/Sidbar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne,homeObjTwo,homeObjThree } from '../components/InfoSection/data';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
const Home = () => {
    const [isOpen,setIsOpen]=useState(false);

    const toggle=()=>{
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Projects />
            <InfoSection {...homeObjThree}/>
            
            <Footer />
        </>
    )
}

export default Home
