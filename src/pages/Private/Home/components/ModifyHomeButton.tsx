import { modifyUser } from "@/redux/slices/user.slice"
import { useDispatch } from "react-redux"

export default function ModifyHomeButton() {
    const dispatch = useDispatch()
    const dispatchAction = () => {
      dispatch(modifyUser({ user: "Gentleman", id: 2 }))
    }
  return (
    <button onClick={dispatchAction}>Dispath Modify Action</button>
  )
}