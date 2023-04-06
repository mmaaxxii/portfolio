import { PrivateRoutes, PublicRoutes, Roles, UserFirebase } from "@/models";
import { logout } from "@/pages/Login/services/firebase";
import { createUser, resetUser } from "@/redux/slices/user.slice";
import { AppStore } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export interface AdminDashboardProps {}

const AdminDashboard : React.FC<AdminDashboardProps> = () => {
	const userState: UserFirebase = useSelector((state: AppStore) => state.user) 
	const [user, setUser] = useState<UserFirebase>({...userState, role: Roles.USER})
	const dispatch = useDispatch()
 	const navigate = useNavigate()
	
	function handleUser() {
		dispatch(createUser(user))
		navigate(`${PrivateRoutes.PRIVATE}`, { replace: true })
	}

	function handlePortfolio() {
		logout()
    	dispatch(resetUser())
   		navigate(`${PublicRoutes.ABOUTME}` , { replace: true } )
	}

	return (
	<div>
		<h1>Admin Dashboard</h1>
		<br/>
		<p>This is my admin's dashboard. If you want to go to the user's Dashboard, you could change your role making click  <a onClick={handleUser}>here</a></p>
		<br/>
		<p>Or you could go to my Public Portfolio making click <a onClick={handlePortfolio}>here</a> </p>
	</div>
	);
};

export default AdminDashboard;
