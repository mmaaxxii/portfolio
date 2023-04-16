import { Roles, UserFirebase } from "@/models";
import { UserCredential } from "firebase/auth";


export const FirebaseAdapter = (user: UserCredential, role?: Roles): UserFirebase => {
    // const {id, name} = user;  
    console.log(user.user.photoURL)
    return {
        uid: user.user.uid,
        email: user.user.email,
        displayName: user.user.displayName,
        photoURL: user.user.photoURL?.substring(0, user.user.photoURL?.indexOf('=')) as string,
        providerId: user.user.providerId,
        phoneNumber: user.user.phoneNumber,
        role: role ? role : Roles.USER,

        // en caso de que la api y modelo tengan misma propiedad se puede usar 
        //id, 
    };
};