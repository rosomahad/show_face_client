import { request } from './request';


export default {
    findByMembers: async (firstMemberId: number, secondMemberId: number) => {
        try {
            const { data } = await request({
                url: `/v1/users/${firstMemberId}/users/${secondMemberId}/chats`,
                method: 'get'
            })

            return data;
        } catch (error) {

        }
    },

    findAllByUserId: async (userId: number) => {
        try {
            const { data } = await request({
                url: `/v1/users/${userId}/chats`,
                method: 'get'
            })

            return data;
        } catch (error) {

        }
    },
}