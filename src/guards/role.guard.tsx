import { PrivateRoutes, Roles } from "@/models";
import { AppStore } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
    role: Roles;
}

export default function RoleGuard( {role} : Props)  {
    const userState = useSelector((state: AppStore) => state.user)
    return userState.role === role ? <Outlet/> : <Navigate replace to={PrivateRoutes.PRIVATE}/>
}