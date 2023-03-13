import BurguerButton from "@/components/BurguerButton/BurguerButton"
import { PublicRoutes } from "@/models"
import { MouseEventHandler, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import PortfolioWrapperChild from "./PortfolioWrapperChild"
import { BgDiv, PortfolioWrapperLogo, PortfolioWrapperNav} from "./styled-components/portfolioWrapper.styled"

import './styled-components/portfolioWrapperLink.styled.css' 

interface Props {
    children: JSX.Element | JSX.Element[]
    active: string
    handleRoute: any
}


 function PortfolioWrapper({active , handleRoute, children} : Props) {
  const start  = "<"
  const mid = " ME "
  const end = " />"
  const navigate = useNavigate()

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }

  const handleClickLink = (route: string) => {
    if (clicked) {  handleClick() } 
    handleRoute(route)
    //navigate(route, {replace: true})
  }

  return (
    <> 
        <PortfolioWrapperNav>
            <h2><span>{start}</span>{mid}<span>{end}</span></h2> 
            <div className={`links ${clicked ? 'active' : ''}`}>
              <a onClick={() => (handleClickLink(PublicRoutes.ABOUTME))} className={active === PublicRoutes.ABOUTME ? 'selecetedLink' : (clicked ? 'unselecetedLink' : 'unselecetedLinkMobile')}>AboutMe</a>
              <a onClick={() => (handleClickLink(PublicRoutes.SKILLS))} className={active === PublicRoutes.SKILLS ? 'selecetedLink' : (clicked ? 'unselecetedLink' : 'unselecetedLinkMobile')}>Skills</a>
              <a onClick={() => (handleClickLink(PublicRoutes.PROJECTS))}  className={active === PublicRoutes.PROJECTS ? 'selecetedLink' : (clicked ? 'unselecetedLink' : 'unselecetedLinkMobile')}>Projects</a>
              <a onClick={() => (handleClickLink(PublicRoutes.CONTACT))}  className={active === PublicRoutes.CONTACT ? 'selecetedLink' : (clicked ? 'unselecetedLink' : 'unselecetedLinkMobile')}>Contact</a>
            </div>
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
