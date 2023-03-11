import { PortfolioWrapper, PortfolioWrapperChild } from "./wrapper"
import { lazy, useState } from 'react';
import { PublicRoutes } from "@/models";


import { useEffect } from 'react';

interface Props {
  route: string
}

export default function Portfolio({ route }: Props): JSX.Element {
  const [intRoute, setIntRoute] = useState<string>(route)

  useEffect(() => {

    console.log(route)
  }, [route])

  return (
    <PortfolioWrapper active={route}>
        <PortfolioWrapperChild route={route}/>
      </PortfolioWrapper>
  )
}