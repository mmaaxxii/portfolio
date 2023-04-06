import { Roles, UserFirebase } from "@/models";
import { UserCredential } from "firebase/auth";


export const FirebaseAdapter = (user: UserCredential, role?: Roles): UserFirebase => {
    // const {id, name} = user;  
    return {
        uid: user.user.uid,
        email: user.user.email,
        displayName: user.user.displayName,
        photoURL: user.user.photoURL,
        providerId: user.user.providerId,
        phoneNumber: user.user.phoneNumber,
        role: role ? role : Roles.USER,

        // en caso de que la api y modelo tengan misma propiedad se puede usar 
        //id, 
    };
};