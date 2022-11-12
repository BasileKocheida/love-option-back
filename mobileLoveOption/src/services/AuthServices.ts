import { API } from "../utils"
import axios, {AxiosResponse} from 'axios';

class AuthService {
    constructor(
        private loginBaseUrl = 'http://love-option.test/authentication_token'
    )
    {}

    async login(email: string, password: string){
        try {
            console.log(this.loginBaseUrl);
            return fetch(this.loginBaseUrl,
                {
                  method:'POST',
                  headers:{
                    'Content-Type': 'application/json'
                  },

                }).then((res)=>{
                    console.log(res);
                  return res.text()
                }).then((data)=>{
                    console.log(data)
            })

        } catch(error) {
            console.log(error)
            throw new Error("Error AuthService Login " + JSON.stringify({...error})); 
        }
    }

}

export const authService = new AuthService()
