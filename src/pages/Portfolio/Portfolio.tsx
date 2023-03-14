import { PortfolioWrapper, PortfolioWrapperChild } from "./wrapper"

interface Props {
  route: string
}

export default function Portfolio({ route }: Props): JSX.Element {
 
return (
      <PortfolioWrapper active={route}>
          <PortfolioWrapperChild/>
      </PortfolioWrapper>
    
  

  )
}