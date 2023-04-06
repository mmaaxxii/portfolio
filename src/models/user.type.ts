import { Roles } from '@/models';
import { UserInfo } from 'firebase/auth';

export interface User {

    id: string 
    name: string
    email?: string
    uid?: string
    role?: Roles
}

export const UserEmptyState: User = {
    id: '',
    name: '',
    email: '',
    uid: '',
    role: Roles.USER
};

interface Origin {
    name: string
    url: string
}

export interface ApiUser {
    
        id: number
        name: string
        status: string
        species: string
        type: string
        gender: string
        origin: Origin,
        location: Origin,
        image: string
        episode: string[],
        url: string
        created: string
      
}

const ApiUserEmptyStateOrigin = {
  name: "",
  url: ""
}

export const ApiUserEmptyState: ApiUser = {
    id: 0,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: ApiUserEmptyStateOrigin,
    location: ApiUserEmptyStateOrigin,
    image: "",
    episode: [],
    url: "",
    created: ""
  };



  export interface UserFirebase extends UserInfo{
    
    role?: Roles

}


export const UserFirebaseEmptyState: UserFirebase = {
    displayName: '',
    email: '',
    phoneNumber: '',
    photoURL: '',
    providerId: '',
    uid: '',
    role: Roles.ADMIN,
};
