import { TypeWithKey } from "@/models"

export const GetValidationError = (errorCode: any) => {
  const codeMatcher: TypeWithKey<string> = {
        ERR_NETWORK: "Network Error",
        ERR_BAD_REQUEST: "Bad Request",
    } 
    return codeMatcher[errorCode] || "Unknown Error"
}
