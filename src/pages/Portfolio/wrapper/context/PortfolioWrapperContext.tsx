import { createContext, useState } from "react" 
import { PublicRoutes } from '@/models/router';
export const WrapperContext = createContext({} as any)

export function PortfolioWrapperContextProvider({children}: any) {
  const [activeRoute, setActiveRoute] = useState(PublicRoutes.ABOUTME)
  
  function updateRoute (route: string) {
    setActiveRoute(route)
  }
  
  return (
    <WrapperContext.Provider value={{activeRoute: activeRoute, updateRoute: updateRoute}}>
      {children}
    </WrapperContext.Provider>
  )
}
 