import React from 'react'
import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP } from './ProjectsElements'
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';
const Projects = () => {
    return (
        <>
            <ProjectsContainer id="projects">
                <ProjectsH1>My Projects</ProjectsH1>
                <ProjectsWrapper>
                    <ProjectsCard to="/project1" target="_blank">
                        <ProjectsIcon src={Icon1} />
                        <ProjectsH2>Recommendation System</ProjectsH2>
                        <ProjectsP>A Movie Recommendation API built using Flask</ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard to="/project2" target="_blank">
                        <ProjectsIcon src={Icon2} />
                        <ProjectsH2>Portfolio Website</ProjectsH2>
                        <ProjectsP>A Pesonal Website built using React Framework</ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard to="" target="">
                        <ProjectsIcon src={Icon3} />
                        <ProjectsH2>To-do List</ProjectsH2>
                        <ProjectsP>A to-do list built using HTML, CSS, JS</ProjectsP>
                    </ProjectsCard>
                </ProjectsWrapper>
            </ProjectsContainer>
        </>
    )
}

export default Projects
