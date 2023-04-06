import { PrivateRoutes } from "@/models"
import { RoutesWithNotFound } from "@/utilities"
import { lazy } from "react"
import { Navigate, Route } from "react-router-dom"


const Dashboard = lazy(() => import("./Dashboard/Dashboard"))
const Home = lazy(() => import("./Home/Home"))
const SignOut = lazy(() => import("./SignOut/SignOut"))

function Private() {
  return (
    <RoutesWithNotFound>
      <Route path='/' element={<Navigate to ={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard/>} />
      <Route path={PrivateRoutes.HOME} element={<Home/>} />
      <Route path={PrivateRoutes.SIGNOUT} element={<SignOut />} /> 
    </RoutesWithNotFound>
  )
}
export default Private