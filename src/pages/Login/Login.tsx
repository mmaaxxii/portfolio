import { PrivateRoutes, PublicRoutes } from "@/models"
import { createUser, resetUser } from "@/redux/slices/user.slice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { AuthService } from "./services"


function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(resetUser())
        navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
    }, [])

    const login =  () => { 
        try{
            const result =  AuthService           
            dispatch(createUser(result))
            navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true })
        } catch (error) { }
    } 
  return (
    <div>
        <h1> WELCOME TO THE LOGIN </h1>
        <button onClick={login}>Login</button>
    </div>
  )
}
export default Login