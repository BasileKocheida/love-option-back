import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from '../reducers/AuthSlice';
import RegisterSlice from '../reducers/RegisterSlice';

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    register: RegisterSlice
  }
});