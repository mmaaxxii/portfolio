import { PortfolioWrapper, PortfolioWrapperChild } from "./wrapper"
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

interface Props {
  route: string
}

export default function Portfolio({ route }: Props): JSX.Element {
  const navigate = useNavigate()
  function handleRoute  (activeRoute: string) {
    console.log(activeRoute) 
  }

return (
    <PortfolioWrapper active={route} handleRoute= {handleRoute}>
        <PortfolioWrapperChild route={route}/>
    </PortfolioWrapper>
  )
}