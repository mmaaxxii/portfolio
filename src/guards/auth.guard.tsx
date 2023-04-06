import { PrivateRoutes, PublicRoutes, User } from "@/models"
import { AppStore } from "@/redux/store"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { UserFirebase } from './../models/user.type';
import { UserInfo } from "firebase/auth";

const PrivateValidationFragment = <Outlet/>
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE}/>

interface Props {
    privateValidation?: boolean
}


export const AuthGuard = ({privateValidation} : Props) => {
    const userState: UserFirebase = useSelector((state: AppStore) => state.user)
    return userState.uid ? (privateValidation ? PrivateValidationFragment : PublicValidationFragment ) : <Navigate replace to={PublicRoutes.LOGIN}/>
 } 

 export default AuthGuard
