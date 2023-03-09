import { User, UserEmptyState } from "@/models";
import { createUser , modifyUser} from "@/redux/slices/user.slice"
import { useState } from "react";
import { useDispatch } from "react-redux"
import { serviceTemplate } from "../services"
import { url } from './../services/service-Template';

export default  function CreateHomeButton() {
    const dispatch = useDispatch()
    const getService = async () => {
      const  res: User  = await serviceTemplate(url)
      return res
     
  }
    const dispatchAction = () => {
      getService()
      .then(response => dispatch(createUser( response )))
    }
  return (
    <button onClick={dispatchAction}>Dispatch Create Action</button>
  )
}