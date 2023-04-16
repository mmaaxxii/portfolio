import { PrivateRoutes, PublicRoutes, Roles, UserFirebase } from "@/models"
import { logout } from "@/pages/Login/services/firebase"
import { createUser, resetUser } from "@/redux/slices/user.slice"
import { AppStore } from "@/redux/store"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { DashboardContainer } from "./styled-components"


export default function Dashboard() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userState: UserFirebase = useSelector((state: AppStore) => state.user) 
  const [user, setUser] = useState<UserFirebase>({...userState, role: Roles.ADMIN})

  function handleLogout () {
    logout()
    dispatch(resetUser())
    navigate(`${PublicRoutes.LOGIN}` , { replace: true } )
  }

  function handleAdmin() {
    
    dispatch(createUser(user))
    navigate(`${PrivateRoutes.ADMIN}`, { replace: true })

  }

  return (
    <DashboardContainer>
      <h1>Dashboard</h1>
      <img src={user.photoURL as string } alt="Profile image" width='50%' height='50%'></img>
      <h2>Welcome {user.displayName}</h2>
      <p>This is my user's dashboard. If you want to go to the admin's Dashboard, you could change you role making click  <a onClick={handleAdmin}>here</a></p>
      <button onClick={handleLogout}>Logout</button>
    </DashboardContainer>
  )
}