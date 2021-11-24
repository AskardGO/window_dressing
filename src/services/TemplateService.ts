import axios from "axios";

const API_URL = 'http://ec2-18-195-45-229.eu-central-1.compute.amazonaws.com/api';

export function getTemplates():any {
    return axios.get(API_URL + '/invoices/templates')
        .then(r => [r, null])
        .catch(err => [null, err])
}

export function getTemplate(templateId: string):any {
    return axios.get(API_URL + '/invoices/templates/' + templateId)
        .then(r => [r, null])
        .catch(err => [null, err])
}