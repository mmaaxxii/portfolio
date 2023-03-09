import { ApiUser, Roles, User } from "@/models";

export const serviceTemplateAdapter = (user: ApiUser): User => {
    // const {id, name} = user;  
    return {
        id: user.status,
        name: user.name,
        email: user.image,
        role: Roles.ADMIN,
        // en caso de que la api y modelo tengan misma propiedad se puede usar 
        //id, 
    };
};