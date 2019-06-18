import { request } from './request';


export default {
    createByChannelId: async (channelId: number, values: any) => {
        try {
            const response = await request({
                url: `/v1/channels/${channelId}/messages`,
                method: 'post',
                data: values
            })

            return response;
        } catch (err) {
            // TODO:
        }
    },

    createByChatId: async (chatId: number, values: any) => {
        try {
            const response = await request({
                url: `/v1/chats/${chatId}/messages`,
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

    findByChannelId: async (channelId: number) => {
        try {
            const { data } = await request({
                url: `/v1/channels/${channelId}/messages`,
                method: 'get'
            })

            return data;
        } catch (error) {

        }
    },

    findByChatId: async (chatId: number) => {
        try {
            const { data } = await request({
                url: `/v1/chats/${chatId}/messages`,
                method: 'get'
            })

            return data;
        } catch (error) {

        }
    },
}