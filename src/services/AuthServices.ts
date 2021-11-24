import axios from "axios";

const API_URL = 'http://ec2-18-195-45-229.eu-central-1.compute.amazonaws.com/api'

export function logIn({email, password}:{email: string, password: string}):any {
        return axios.post(API_URL + '/auth/login',
            {
                email: email,
                password: password
            }
        )
            .then(r => r.data)
            .catch(err => err)
}

export function logOut() {
    localStorage.removeItem('token')
}
