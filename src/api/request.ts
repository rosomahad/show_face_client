import axios from 'axios';

type TReqmethods = 'post' | 'get' | 'delete' | 'put';

interface IRequestData {
    url: string,
    data?: any,
    method?: TReqmethods
}

function getToken() {
    const token = window.localStorage.getItem("token");
    return token ? JSON.parse(token) : '';
}

function getHeaders() {
    return { Authorization: `Bearer ${getToken()}` };
}

const request = async ({ url, data, method = 'post' }: IRequestData) => {
    try {
        const response: any = await axios({
            headers: getHeaders(),
            url: `http://localhost:8000/api${url}`,
            method,
            data,
        });

        return response;
    } catch (e) {
        throw new Error(e);
    }
};

export {
    request,
};