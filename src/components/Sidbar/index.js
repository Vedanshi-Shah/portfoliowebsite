import React from 'react';
import { SidebarContainer,Icon, CloseIcon , SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} to="about">
                        About
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="education">
                        Education
                    </SidebarLink>

                    <SidebarLink onClick={toggle} to="projects">
                        Projects
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="skills">
                        Skills
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/contact">Contact Me</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
