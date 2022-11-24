import {API, getTokenFromStorage} from '../utils';
import axios, {AxiosResponse} from 'axios';

class RegisterService {
  constructor(
    private loginBaseUrl = '/user',
    // private meBaseUrl = '/me',
    // private token = getTokenFromStorage()
  ) {}
    async register(email: string, plainPassword: string): Promise<AxiosResponse> {
        try {
            console.log(API.getUri() + this.loginBaseUrl);
            return await API.post(this.loginBaseUrl, {
                email: email,
                plainPassword: plainPassword,
            });
        } catch (error) {
            console.log(error);
            throw new Error('Error RegisterService : ' + JSON.stringify({...error}));
        }
    }

    // async me(): Promise<AxiosResponse> {
    //     try {
    //         const config = {
    //             headers: {
    //               'Authorization': `Bearer ${this.token}`,
    //             }
    //         }
    //         return await API.get(this.meBaseUrl, config);
    //     } catch (error) {
    //         console.log(error);
    //         throw new Error('Error AuthService Get User Info ' + JSON.stringify({...error}));
    //     }
    // }

}

export const registerService = new RegisterService();