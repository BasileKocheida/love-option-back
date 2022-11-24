import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import UserModel from '../models/UserModel';
import {authService} from '../services/AuthServices';
import {removeLocalData, storeLocalData} from '../utils';

interface SliceState {
  user: UserModel | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const initialState: SliceState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state: {user: any}, action: PayloadAction<UserModel>) => {
      state.user = action.payload;
    },
    setToken: (state: {token: any}, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setIsAuthenticated: (
      state: {isAuthenticated: any},
      action: PayloadAction<boolean>,
    ) => {
      state.isAuthenticated = action.payload;
    },
    setIsLoading: (
      state: {isLoading: boolean},
      action: PayloadAction<boolean>,
    ) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      // console.log('Login :', state);
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false;
      // console.log('getUser :', state);
    });
  },
});

export const {setUser, setToken, setIsAuthenticated, setIsLoading} =
  AuthSlice.actions;
export default AuthSlice.reducer;

export const login = createAsyncThunk(
  'users/login',
  async (data: {email: string; password: string}, thunkAPI) => {
    const response = await authService.login(data.email, data.password);
    console.log(response.data.token);
    console.log(response.status);

    if (response.status == 200) {
      await storeLocalData('token', response.data.token);
      thunkAPI.dispatch(setToken(response.data.token));
      thunkAPI.dispatch(setIsAuthenticated(true));
      thunkAPI.dispatch(setIsLoading(false));

      return true;
    }

    return false;
  },
);
export const logout = createAsyncThunk(
  'users/logout',
  async (data: null, thunkAPI) => {
    await removeLocalData('token');
    thunkAPI.dispatch(setToken(null));
    thunkAPI.dispatch(setIsAuthenticated(false));
    thunkAPI.dispatch(setIsLoading(false));
  },
);
export const getUser = createAsyncThunk(
  'users/get',
  async (data: null, thunkAPI) => {
    const response = await authService.me();
    if (response.status == 200) {
      const user = new UserModel(response.data.user);
    }
    return response.data.token;
  },
);
