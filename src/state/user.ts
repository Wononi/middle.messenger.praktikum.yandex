import {HTTPTransport} from '../utils/API';
const api = new HTTPTransport();

const userState = {
    id: '',
    first_name: '',
    second_name: '',
    login: '',
    email: '',
    password: '',
    phone: '',
    isLogin: false,
};

export const signIn = (data) => {
    api.post('/auth/signin', {data: JSON.stringify(data), headers: {'Content-Type': 'application/json', 'accept': 'application/json'}}).then((response) => {
        if();
    });
};
