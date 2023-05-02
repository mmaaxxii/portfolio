import { ContactType } from "@/models";
import axios, { AxiosResponse } from "axios";



export const url = "http://localhost:5000/contact";

export const contactSendEmail =  (contactRequest: ContactType) : string => {
   axios.post<AxiosResponse>(url, {
    method: "POST",
    headers: {
        "Content-Type": "Application/json;charset=urf-8",
    },
    body: JSON.stringify(contactRequest),
    } )
    .then((res) => (res.data))
    return "ok"
};
