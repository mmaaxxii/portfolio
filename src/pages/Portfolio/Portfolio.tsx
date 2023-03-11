import { PortfolioWrapper, PortfolioWrapperChild } from "./wrapper"

import { useEffect } from 'react';

interface Props {
  route: string
}

export default function Portfolio({ route }: Props): JSX.Element {

console.log(route)
return (
    <PortfolioWrapper active={route}>
        <PortfolioWrapperChild route={route}/>
      </PortfolioWrapper>
  )
}