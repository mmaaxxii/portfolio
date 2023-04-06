import { PrivateRoutes, PublicRoutes, UserFirebase } from "@/models"
import { createUser, modifyUser, resetUser } from "@/redux/slices/user.slice"
import { GoogleAuthProvider, User, signInWithPopup } from "firebase/auth"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { auth, logout } from "./services/firebase"
import {Roles} from '@/models'

function Login() {

    const [state, setState] = useState(0);
    /*
    0: user state initialize
    
    2: complete login
    3: logged but not complete
    4: no one logged


    */

    const dispatch = useDispatch()
    const navigate = useNavigate()

    

    function handleUserStateChange(user: User | null) {
        if (user) {
            //setState(3)
            dispatch(createUser(user.providerData[0]))
            navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true })
        } else {
            //setState(4)
            dispatch(resetUser())
        }
    }

    async function handleLogin() {
        const googleProvider = new GoogleAuthProvider()
        await signInWithGoogle(googleProvider)

        async function signInWithGoogle(googleProvider: GoogleAuthProvider) {
            try {
                const result = await signInWithPopup(auth, googleProvider)
                const user: UserFirebase = {
                    uid: result.user.uid,
                    email: result.user.email,
                    displayName: result.user.displayName,
                    photoURL: result.user.photoURL,
                    providerId: result.user.providerId,
                    phoneNumber: result.user.phoneNumber,
                    role: Roles.USER
                }
                
                dispatch(createUser(user))

                //dispatch(modifyUser(user))
                console.log(result.user.providerData[0])
                //setState(3)
                navigate(`${PrivateRoutes.PRIVATE}`, { replace: true })
                
            } catch (error) { }
        }

    }

    function handleLogout() {
        logout()
        dispatch(resetUser())
        navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
    }

    return (
        <>
        <div>
                <h1> WELCOME TO THE LOGIN </h1>
                <h2> I want to show you some extra skills that I already know </h2>
                <p>let's do it  </p>
                <button onClick={handleLogin}>Login with Google</button>   
                <span>   or   </span>
                <button onClick={handleLogout}>Logout</button> 
        </div>
        </>
    )
}
export default Login