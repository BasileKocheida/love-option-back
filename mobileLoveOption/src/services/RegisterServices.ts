import {API, getTokenFromStorage} from '../utils';
import axios, {AxiosResponse} from 'axios';

class RegisterService {
  constructor(
    private loginBaseUrl = '/api/users', // private meBaseUrl = '/me', // private token = getTokenFromStorage()
  ) {}
  async register(email: string, plainPassword: string): Promise<AxiosResponse> {
    try {
      console.log(API.getUri() + this.loginBaseUrl, email, plainPassword);
      return await API.post(this.loginBaseUrl, {
        email: email,
        plainPassword: plainPassword,
      });
    } catch (error) {
      console.log(error);
      throw new Error('Error RegisterService : ' + JSON.stringify({...error}));
    }
  }
}

export const registerService = new RegisterService();
