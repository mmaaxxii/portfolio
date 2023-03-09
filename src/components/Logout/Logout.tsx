import { resetUser } from "@/redux/slices/user.slice";
import { PublicRoutes } from '@/models';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Logout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(resetUser());
        navigate(`/${ PublicRoutes.LOGIN }`, { replace: true });
    }

    return (    
    <button onClick={logOut}>Log Out</button>
  )
}

export default Logout