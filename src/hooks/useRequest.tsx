import React from "react"
import axios from 'axios'

export default function useRequest(){

    const getRequest = async (url:string) =>{
        return axios.get(url)    
    }
    
    
    return {
        getRequest,
    }
}
