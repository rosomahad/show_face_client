import { request } from './request';

interface signUpCredantials {
    password: string
    email: string
}

interface signInCredantials {
    password: string
    email: string
    fullName: string
    nickname: string
}

export default {
    signIn: async (credantials: signUpCredantials) => {
        try {
            const response = await request({ method: 'post', url: '/v1/auth/sign_in', data: credantials })

            const responseData = response.data;

            const users = responseData.data;

            return users;

        } catch (error) {

        }
    },

    logOut: async () => {
        try {
            const response = await request({ method: 'post', url: '/v1/auth/logout', })

            const responseData = response.data;

            const users = responseData.data;

            return users;

        } catch (error) {

        }
    },

    signUp: async (credantials: signInCredantials) => {
        try {
            const response = await request({ method: 'post', url: '/v1/auth/sign_up', data: credantials })

            const responseData = response.data;

            const users = responseData.data;

            return users;

        } catch (error) {

        }
    },

    isAuthorized: async () => {
        try {
            const response = await request({ method: 'get', url: '/v1/auth/is_authorized' })

            const responseData = response.data;

            const users = responseData.data;

            return users;

        } catch (error) {

        }
    },
}