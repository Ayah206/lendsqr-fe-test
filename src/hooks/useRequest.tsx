import React from "react"
import axios from 'axios'

export default function useRequest(){
    const link = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'

    const getRequest = async (apiLink = link) =>{
        return axios
        .get(apiLink)
        .then(function (response) {
            return response.data
        })
    }
    return {
        getRequest
    }
}
