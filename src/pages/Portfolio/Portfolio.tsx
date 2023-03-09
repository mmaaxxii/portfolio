import { AboutMe } from "./components"
import  { PortfolioWrapper } from "./wrapper"
import { lazy } from 'react';

const Skills = lazy(() => import('./components/skills/Skills'));
const Projects = lazy(() => import('./components/projects/Projects'));
const ContactMe = lazy(() => import('./components/contact-me/ContactMe'));


export default function Portfolio() {
  return (
    <PortfolioWrapper> 
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe /> 
    </PortfolioWrapper>)

}