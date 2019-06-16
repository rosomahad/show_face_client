import { request } from './request';

export default {
    create: async (values: any) => {
        try {
            const response = await request({
                url: '/v1/channels',
                method: 'post',
                data: values
            })

            return response;
        } catch (err) {
            // TODO:
        }
    },

    updateOne: (id: number, values: any) => {

    },

    deleteById: (id: number) => {

    },

    findById: (id: number) => {

    },

    findByQuery: async (query: any = {}) => {
        try {
            const response = await request({
                url: '/v1/channels',
                method: 'get'
            })

            return response;
        } catch (err) {
            // TODO:
        }
    },
}