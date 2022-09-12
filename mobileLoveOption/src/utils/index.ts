// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosResponse} from 'axios';

const baseURL = "http://127.0.0.1:8000";

const request = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Export axios as a library for managing API calls.
export const API = request;

export interface ApiResponseData {}

// Export ApiResponseObj as a response object type.
export interface ApiResponseObj<T = ApiResponseData> extends AxiosResponse<T> {}

// Export ApiResponse as a return type of any API request.
export interface ApiResponse extends Promise<any> {}

// export enum STORAGE_KEY {
//   AuthToken = 'token',
// }

// export const storeLocalData = async (storage_Key: any, value: any) => {
//     try {
//       //const jsonValue = value;
//       await AsyncStorage.setItem(storage_Key, value);
//     } catch (e) {
//       // saving error
//       console.log(e);
//     }
//   };
//   export const removeLocalData = async (storage_Key: any) => {
//     await AsyncStorage.removeItem(storage_Key);
//   };
  