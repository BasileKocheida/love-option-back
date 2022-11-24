import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import UserModel from '../models/UserModel';
import {registerService} from '../services/RegisterServices';
import {storeLocalData} from '../utils';
import {store} from "../store/store";
import {login} from "./AuthSlice";

interface SliceState {
  user: UserModel | null;
  isLoading: boolean;
  email: string | null;
  plainPassword: string | null;
}

const initialState: SliceState = {
  user: null,
  email: null,
  plainPassword: null,
  isLoading: false,
  // token: null,
  // isAuthenticated: false,
};

const RegisterSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setUser: (state: {user: any}, action: PayloadAction<UserModel>) => {
      state.user = action.payload;
    },
    setEmail: (state: {email: any}, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPlainPassword: (
      state: {plainPassword: any},
      action: PayloadAction<string>,
    ) => {
      state.plainPassword = action.payload;
    },
    setIsLoading: (
      state: {isLoading: boolean},
      action: PayloadAction<boolean>,
    ) => {
      state.isLoading = action.payload;
    },
    // setToken: (state: { token: any; }, action: PayloadAction<string>) => {
    //   state.token = action.payload
    // },
    // setIsAuthenticated: (state: { isAuthenticated: any; }, action: PayloadAction<boolean>) => {
    //   state.isAuthenticated = action.payload
    // },
  },
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log('Register :', state);
    });
    // builder.addCase(getUser.fulfilled, (state, action) => {
    //   state.isLoading = false
    //   console.log('getUser :', state);
    // })
  },
});

export const {setEmail, setPlainPassword, setIsLoading} =
  RegisterSlice.actions;
export default RegisterSlice.reducer;

export const register = createAsyncThunk(
  'users/register',
  async (data: {email: string; plainPassword: string}, thunkAPI) => {
    const response = await registerService.register(
      data.email,
      data.plainPassword,
    );
    console.log(response.data);
    console.log(response.status);

    if (response.status == 201) {
      thunkAPI.dispatch(
        login({email: data.email, password: data.plainPassword}),
      );
    }

    return false;
  },
);
