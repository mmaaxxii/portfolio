import { configureStore } from '@reduxjs/toolkit';
import { User, UserFirebase } from '../models';
import  userSlice  from './slices/user.slice';
import { UserInfo } from 'firebase/auth';

export interface AppStore {
    user: UserFirebase;
}

export default configureStore<AppStore>({
    reducer: {
        user: userSlice,
    }
})