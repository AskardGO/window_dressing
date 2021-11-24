import axios from "axios";
import {Invoice} from "../pages/Invoices/InvoiceType";

const API_URL = 'http://ec2-18-195-45-229.eu-central-1.compute.amazonaws.com/api';
const getToken = () => {
    const token = localStorage.getItem('token') as string
    if(token) return JSON.parse(token).token
    return null;
}

axios.defaults.headers.common['Authorization'] = 'bearer' + getToken();

export function getInvoices():any {
    return axios.get(API_URL + '/invoices')
        .then(r => [r, null])
        .catch(err => [null, err])
}

export function getInvoice(id:string):any {
    return axios.get(API_URL + `/invoices/${id}`)
        .then(r => [r, null])
        .catch(err => [null, err])
}

export function createInvoice({firstName, lastName, client}:{firstName: string, lastName: string, client: string}) {
    axios.post(API_URL + `/invoices`, {
        firstName: firstName,
        lastName: lastName,
        client: client
    }).then((callback) => {
        return callback;
    }).catch((err) => {
        return err;
    })
}

export function deleteInvoice({id}:{id: string}) {
    axios.delete(API_URL + `/invoices${id}`).then((callback) => {
        return callback;
    }).catch((err) => {
        return err;
    })
}

export function updateInvoice({name, id}:{name: string, id: string}) {
    axios.put(API_URL + `/invoices/${id}`, {
        firstName: name
    }).then((callback) => {
        return callback;
    }).catch((err) => {
        return err;
    })
}
