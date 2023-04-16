import { PrivateRoutes, UserFirebase } from "@/models"
import { createUser } from "@/redux/slices/user.slice"
import { GoogleAuthProvider, User, UserCredential, onAuthStateChanged, signInWithPopup } from "firebase/auth"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { FirebaseAdapter } from "./adapters/"
import { auth } from "./services/firebase"

function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    
    useEffect(() => {
        onAuthStateChanged(auth, handleUserStateChange) 
    }, [])

    function handleUserStateChange(user: User | null) {
        if (user) {
            navigate(`${PrivateRoutes.PRIVATE}`, { replace: true })
        } else {
        }
    }

    async function handleLogin() {
        const googleProvider = new GoogleAuthProvider()
        await signInWithGoogle(googleProvider)

        async function signInWithGoogle(googleProvider: GoogleAuthProvider) {
            try {
                const result: UserCredential = await signInWithPopup(auth, googleProvider)
                const user: UserFirebase =  FirebaseAdapter(result)
                dispatch(createUser(user))
                navigate(`${PrivateRoutes.PRIVATE}`, { replace: true })
                
            } catch (error) { }
        }

    }

    

    return (
        <>
        <div>
                <h1> WELCOME TO THE LOGIN </h1>
                <h2> I want to show you some extra skills that I already know </h2>
                <p>let's do it  </p>
                <button onClick={handleLogin}>Login with Google</button>   
        </div>
        </>
    )
}
export default Login