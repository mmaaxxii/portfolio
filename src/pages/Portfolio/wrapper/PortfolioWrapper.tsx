import { PublicRoutes } from "@/models"
import { MouseEventHandler } from "react"
import { Link, useNavigate } from "react-router-dom"
import PortfolioWrapperChild from "./PortfolioWrapperChild"
import { PortfolioWrapperLogo, PortfolioWrapperNav} from "./styled-components/portfolioWrapper.styled"

import './styled-components/portfolioWrapperLink.styled.css' 

interface Props {
    children: JSX.Element | JSX.Element[]
    active: string
}


 function PortfolioWrapper({active , children} : Props) {
  const logo = "< ME />"
  const navigate = useNavigate()



  return (
    <div> 
        <PortfolioWrapperNav>
            <PortfolioWrapperLogo> {logo} </PortfolioWrapperLogo>
            <button onClick={() => navigate(PublicRoutes.ABOUTME, {replace: true})} className={active === PublicRoutes.ABOUTME ? 'selecetedLink' : 'unselecetedLink'} >About Me</button>
            <button onClick={() => navigate(PublicRoutes.SKILLS, {replace: false})} className={active === PublicRoutes.SKILLS ? 'selecetedLink' : 'unselecetedLink'}>Skills</button>
            <button onClick={() => navigate(PublicRoutes.PROJECTS, {replace: true})}  className={active === PublicRoutes.PROJECTS ? 'selecetedLink' : 'unselecetedLink'}>Projects</button>
            <button onClick={() => navigate("contact", {replace: true})}  className={active === PublicRoutes.CONTACT ? 'selecetedLink' : 'unselecetedLink'}>Contact</button>
        </PortfolioWrapperNav>
        <div className="main-container">{children}</div>
    </div>
  )
}

export default PortfolioWrapper