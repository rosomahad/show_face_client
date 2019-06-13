import { request } from './request';

export default {
    create: async (values: any) => {
        try {
            const response = await request({ method: 'post', url: '/v1/users', data: values })

            console.log(response);
        } catch (error) {

        }
    },

    updateOne: async (id: number, values: any) => {
        try {
            const response = await request({ method: 'post', url: '/v1/users/' + id, data: values })

            console.log(response);
        } catch (error) {

        }
    },

    deleteById: async (id: number) => {
        try {
            const response = await request({ method: 'delete', url: '/v1/users/' + id })

            console.log(response);
        } catch (error) {

        }
    },

    findById: async (id: number) => {
        try {
            const response = await request({ method: 'post', url: '/v1/users/' + id })

            console.log(response);
        } catch (error) {

        }
    },

    getAllByQuery: async (query?: any) => {
        try {
            const response = await request({ method: 'get', url: '/v1/users' })

            const responseData = response.data;

            const users = responseData.data;

            return users;

        } catch (error) {

        }
    },
}