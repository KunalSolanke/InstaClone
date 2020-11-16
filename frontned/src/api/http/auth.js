import axios from 'axios'


const base_url = 'http://127.0.0.1:8000/'

export const login = async (body)=>{
    axios.defaults.headers = {
        'Content-Type': 'application/json'
    }
    return axios.post(base_url+"api/accounts/rest-auth/login/",body)
}


export const register = async (body) => {
    axios.defaults.headers = {
        'Content-Type': 'application/json'
    }
    return axios.post(base_url + "api/accounts/rest-auth/registration/", body)
}