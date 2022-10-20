import React, {useContext} from 'react'
import { user } from '../components/user/types';



export default function useStorage() {
    const storeUser = async (user:any) =>{
        localStorage.setItem('User', JSON.stringify(user));
    } 

    const removeUser = async () => {
        localStorage.removeItem('User');
     };

    const getUser = async () => {
        let value = await localStorage.getItem('User')
        if(value){
            return JSON.parse(value);
        }
        return null
    }
    return{
        storeUser,
        removeUser,
        getUser
    }
}