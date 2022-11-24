import {API, getTokenFromStorage} from '../utils';
import axios, {AxiosResponse} from 'axios';
import { acc } from 'react-native-reanimated';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

class AuthService {
  constructor(
    private loginBaseUrl = '/authentication_token',
    private meBaseUrl = '/me',
    private token = getTokenFromStorage()
  ) {}
    async login(email: string, password: string): Promise<AxiosResponse> {
        try {
            console.log(API.getUri() + this.loginBaseUrl);
            return await API.post(this.loginBaseUrl, {
                email: email,
                password: password,
            });
        } catch (error) {
            console.log(error);
            throw new Error('Error AuthService Login ' + JSON.stringify({...error}));
        }
    }


    async me(): Promise<AxiosResponse> {
        try {
            const config = {
                headers: {
                  'Authorization': `Bearer ${this.token}`,
                }
            }
            return await API.get(this.meBaseUrl, config);
        } catch (error) {
            console.log(error);
            throw new Error('Error AuthService Get User Info ' + JSON.stringify({...error}));
        }
    }
}

export const authService = new AuthService();