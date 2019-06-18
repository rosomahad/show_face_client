import { request } from './request';


export default {
    uploadAvatar: async (formData: FormData) => {
        try {
            const response = await request({
                url: `/v1/uploads/avatars`,
                method: 'post',
                data: formData
            })

            return response;
        } catch (err) {
            // TODO:
        }
    },
}