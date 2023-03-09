import { serviceTemplateAdapter } from "../adapters";
import axios from "axios";
import { ApiUser , User} from "@/models";



export const url = "https://Rickandmortyapi.com/api/character/2";

export const serviceTemplate =  (url: string) :Promise<User> => {
  return axios.get<ApiUser>(url)
    .then((res) => (res.data))
    .then((res) => serviceTemplateAdapter(res));
    
};
