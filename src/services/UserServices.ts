import axios from "axios";

const API_URL = 'http://ec2-18-195-45-229.eu-central-1.compute.amazonaws.com/api/users/'

export function getUser(_id:string):any {
    return axios.get(API_URL + _id)
        .then(r => [r, null])
        .catch(err => [null, err])
}