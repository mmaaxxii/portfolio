
import { clearLocalStorage, persistLocalStorage } from '@/utilities';
import { User, UserInfo } from 'firebase/auth'

import { createSlice } from '@reduxjs/toolkit';
import { UserFirebase, UserFirebaseEmptyState } from '@/models';

interface Action {
    payload: UserFirebase;
}

export const keyUser = 'user';



export const userSlide = createSlice({
    name: 'user',
    initialState: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string ) : UserFirebaseEmptyState,
    reducers: {
        createUser: (state, action: Action) => {
            persistLocalStorage<UserFirebase>(keyUser, action.payload);
            return action.payload;
        },
        modifyUser: ( state, action: Action) => {
            const result = {...state, ...action.payload};
            persistLocalStorage<UserFirebase>(keyUser, result);
            return result 
        },  
        resetUser: () => {
            clearLocalStorage(keyUser);
            return UserFirebaseEmptyState
        }
     }
})

export const { createUser, modifyUser, resetUser} = userSlide.actions;
export default userSlide.reducer; 