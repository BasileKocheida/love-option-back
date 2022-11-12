import { API } from "../utils"
import axios, {AxiosResponse} from 'axios';

class AuthService {
    constructor(
        private loginBaseUrl = 'https://jsonplaceholder.typicode.com/todos/1'
    )
    {}

    async login(email: string, password: string){
        try {
            console.log(this.loginBaseUrl);
            // return API.post(this.loginBaseUrl, {email, password})
            return fetch(this.loginBaseUrl, {
                method:'GET',
                // body: JSON.stringify({email, password})
            })
        } catch(error) {
            console.log(error)
            throw new Error("Error AuthService Login " + JSON.stringify({...error})); 
        }
    }

}

export const authService = new AuthService()
