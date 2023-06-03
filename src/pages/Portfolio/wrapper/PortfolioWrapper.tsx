 import BurguerButton from "@/components/BurguerButton/BurguerButton"
import { PublicRoutes } from "@/models"
import { ColorSchemeActive } from "@/utilities"
import {  useContext,  useState } from "react"
import { useNavigate } from "react-router-dom"
import { WrapperContext } from "./context"
import { MoonFill } from "react-bootstrap-icons"
import { SunFill } from "react-bootstrap-icons"
import { BgDiv, PortfolioWrapperNav} from "./styled-components/portfolioWrapper.styled"
import './styled-components/portfolioWrapperLink.styled.css' 
import { persistLocalStorage } from '@/utilities/localStorage.utility';

interface Props {
    children: JSX.Element | JSX.Element[]
    active: string
}

 function PortfolioWrapper({active, children} : Props) {
  const start  = "<"
  const mid = "ME"
  const end = "/>"
  const navigate = useNavigate()
  const [activeRoute, setActiveRoute] = useState<string>(PublicRoutes.ABOUTME)
  const {updateRoute} = useContext(WrapperContext)  
  const [colorScheme, setColorScheme] = useState<string>(ColorSchemeActive())
  const [clicked, setClicked] = useState(false)
  const allElements = document.querySelectorAll("*");

  const handleClick = () => {
    setClicked(!clicked)
    const body = document.querySelector('body')?.setAttribute('style', `overflow-y: ${clicked ? 'auto' : 'hidden'}`)
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  const handleClickLink = (route: string) => {
    if (clicked) {  handleClick() } 
    updateRoute(route)
    setActiveRoute(route)
    
  }

  const handleClickTheme = () => {

    allElements.forEach((element) => {
      element.classList.add("transition");
      setTimeout(() => {
        element.classList.remove("transition");
      }
      , 1000);
      
    });

    if (colorScheme === 'dark') {
      

      document.querySelector('html')?.setAttribute('data-theme', 'light' )
      setColorScheme('light')
      localStorage.setItem('color-scheme', 'light')
      
    } else {
      
      document.querySelector('html')?.setAttribute('data-theme', 'dark')
      setColorScheme('dark')
      localStorage.setItem('color-scheme', 'dark')
      
    }
  }

  const handleClickResume = () => {

  }

  return (
    <> 
        <PortfolioWrapperNav>
            <h2>{start}<span>{mid}</span>{end}</h2> 
            <div className={`links ${clicked ? 'active' : ''}`}>
              <a onClick={() => (handleClickLink(PublicRoutes.ABOUTME))} className={activeRoute === PublicRoutes.ABOUTME ? 'selectedLink' : (!clicked ? (colorScheme==='dark' ?'unselecetedLinkWebDark' :'unselecetedLinkWebLight') : 'unselecetedLinkMob')}>AboutMe</a>
              <a onClick={() => (handleClickLink(PublicRoutes.SKILLS))} className={activeRoute === PublicRoutes.SKILLS ? 'selectedLink' : (!clicked ? (colorScheme==='dark' ?'unselecetedLinkWebDark' :'unselecetedLinkWebLight') : 'unselecetedLinkMob')}>Experience</a>
              <a onClick={() => (handleClickLink(PublicRoutes.PROJECTS))}  className={activeRoute === PublicRoutes.PROJECTS ? 'selectedLink' : (!clicked ? (colorScheme==='dark' ?'unselecetedLinkWebDark' :'unselecetedLinkWebLight') : 'unselecetedLinkMob')}>Projects</a>
              <a onClick={() => (handleClickLink(PublicRoutes.CONTACT))}  className={activeRoute === PublicRoutes.CONTACT ? 'selectedLink' : (!clicked ? (colorScheme==='dark' ?'unselecetedLinkWebDark' :'unselecetedLinkWebLight') : 'unselecetedLinkMob')}>Contact</a>
              {/* <a onClick={() => navigate(PublicRoutes.LOGIN)}  className={activeRoute === PublicRoutes.LOGIN ? 'selectedLink' : (!clicked ? (colorScheme==='dark' ?'unselecetedLinkWebDark' :'unselecetedLinkWebLight') : 'unselecetedLinkMob')}>Login</a> */}
            </div>
            <button id="switch" className="switch" onClick={handleClickTheme}>{colorScheme === 'dark' ?  <SunFill size={25}/>:<MoonFill size={25}/> }</button>
            <div className="burguer">
              <BurguerButton clicked={clicked} handleClick={handleClick}/>
            </div>
        </PortfolioWrapperNav>
        <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
        <div className="main-container">{children}</div>
    </>
  )
}

export default PortfolioWrapper
