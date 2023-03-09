import { Link } from "react-router-dom"
import style from "./portfolioWrapper.module.css"

interface Props {
    children: JSX.Element | JSX.Element[]
}


 function PortfolioWrapper({children} : Props) {
  return (
    <div> 
        <nav className={style.nav}>
            <div className={style.logo}>Logotipo</div>
            <Link to="/dashboard">Links</Link>
            <Link to="/dashboard/profile">Profile</Link>
            <Link to="/login">Login</Link>
        </nav>
        <div className="main-container">{children}</div>
    </div>
  )
}

export default PortfolioWrapper