import { UserEmptyState , User } from '@/models';
import { clearLocalStorage, persistLocalStorage } from '@/utilities';

import { createSlice } from '@reduxjs/toolkit';

interface Action {
    payload: User;
}

export const keyUser = 'user';

export const userSlide = createSlice({
    name: 'user',
    initialState: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string ) : UserEmptyState,
    reducers: {
        createUser: (state, action: Action) => {
            persistLocalStorage<User>(keyUser, action.payload);
            return action.payload;
        },
        modifyUser: ( state, action: Action) => {
            const result = {...state, ...action.payload};
            persistLocalStorage<User>(keyUser, result);
            return result 
        },  
        resetUser: () => {
            clearLocalStorage(keyUser);
            return UserEmptyState
        }
     }
})

export const { createUser, modifyUser, resetUser} = userSlide.actions;
export default userSlide.reducer; 