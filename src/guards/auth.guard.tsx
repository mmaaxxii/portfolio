import { PrivateRoutes, PublicRoutes, User } from "@/models"
import { AppStore } from "@/redux/store"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const PrivateValidationFragment = <Outlet/>
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE}/>

interface Props {
    privateValidation?: boolean
}


export const AuthGuard = ({privateValidation} : Props) => {
    const userState: User = useSelector((state: AppStore) => state.user)
    return userState.name ? (privateValidation ? PrivateValidationFragment : PublicValidationFragment ) : <Navigate replace to={PublicRoutes.LOGIN}/>
 } 

 export default AuthGuard
