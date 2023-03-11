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
        case "aboutme":
        return <AboutMe />
        case "skills":
        return <Skills />
        case "projects":
        return <Projects />
        case "contact":
        return <Contact />
        default:
        return <AboutMe />
    }
}