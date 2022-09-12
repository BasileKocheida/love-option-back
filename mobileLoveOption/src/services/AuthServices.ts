import { API } from "../utils"
import axios, {AxiosResponse} from 'axios';


class AuthService {
    constructor(
        private loginBaseUrl = '/authentication_token'
    )
    {}

    login(email: string, password: string){
        try {
            return fetch(this.loginBaseUrl, {
                method:'POST',
                headers: {
                    'Content-Type':	'application/json'
                },
                body: JSON.stringify({email, password})
            })
        } catch(error) {
            throw new Error("Error AuthService Login");   
        }
    }

}

export const authService = new AuthService()