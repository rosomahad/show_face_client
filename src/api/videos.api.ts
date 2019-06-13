import { request } from './request';

export default {
    upload: async (userId: number, blob: any) => {
        await request({
            url: ('/v1/users/' + userId + '/videos'),
            data: blob,
            method: 'post'
        })
    },

    updateOne: (id: number, values: any) => {

    },

    deleteById: (id: number) => {

    },

    findById: (id: number) => {

    },
}