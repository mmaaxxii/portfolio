import { SnackbarUtilities } from '@/utilities';
import { GetValidationError } from '@/utilities/get-validation-error';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const AxiosInterceptor = () => {
  
  const updateHeader = (request: AxiosRequestConfig) => {
      const token = 1131231312312313 //localStorage.getItem('token');
      const newHeaders = {
        Authorization: token,
        "Content-Type": "application/json",
      };
      request.headers = newHeaders;
      return request;
    }
    axios.interceptors.request.use(
      (request) => {
          console.log("Starting request", request)
          // return updateHeader(request)
          return request}
    );

    axios.interceptors.response.use(
      ( response) => {
        console.log("response:",response)
        return response},
      (error) =>  {
        SnackbarUtilities.error(GetValidationError(error.code))
        console.log("error:", GetValidationError( error.code))
        return Promise.reject(error);
       });
}
