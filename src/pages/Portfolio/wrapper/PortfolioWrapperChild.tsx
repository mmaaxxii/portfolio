import { PublicRoutes } from '@/models';
import { lazy, useContext } from 'react';
import { WrapperContext } from './context';

const AboutMe = lazy(() => import('../components/about-me/AboutMe'));
const Skills = lazy(() => import('../components/skills/Skills'));
const Projects = lazy(() => import('../components/projects/Projects'));
const Contact = lazy(() => import('../components/contact/Contact'));


export default function PortfolioWrapperChild(): JSX.Element {
    const activeRoute = useContext(WrapperContext)
    
        switch (activeRoute.activeRoute) {
            case PublicRoutes.ABOUTME:
             return <AboutMe /> 
            case PublicRoutes.SKILLS:
             return <Skills />
            case PublicRoutes.PROJECTS:
             return <Projects />
            case PublicRoutes.CONTACT:
             return <Contact/>
            default: 
             return <AboutMe />
        }
    
}   