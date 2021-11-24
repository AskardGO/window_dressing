import axios from "axios";
import {ClientDataType} from "../components/ClientAdd/ClientDataType";

const API_URL = 'http://ec2-18-195-45-229.eu-central-1.compute.amazonaws.com/api';

export function postClient(data:ClientDataType):any {
    return axios.post(API_URL + '/clients', data)
        .then(r => [r, null])
        .catch(err => [null, err])
}