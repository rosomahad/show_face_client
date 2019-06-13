import axios from 'axios';

type TReqmethods = 'post' | 'get' | 'delete' | 'put';

interface IRequestData {
    url: string,
    data?: any,
    method?: TReqmethods
}

function getHeaders() {
    return {};
}

const request = async ({ url, data, method = 'post' }: IRequestData) => {
    try {
        const response: any = await axios({
            withCredentials: true,
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