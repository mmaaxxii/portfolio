import { PublicRoutes } from '@/models';
import { lazy } from 'react';

const AboutMe = lazy(() => import('../components/about-me/AboutMe'));
const Skills = lazy(() => import('../components/skills/Skills'));
const Projects = lazy(() => import('../components/projects/Projects'));
const Contact = lazy(() => import('../components/contact/Contact'));

interface Props {
    route: string
}

export default function PortfolioWrapperChild({route}: Props): JSX.Element {
    switch (route) {
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