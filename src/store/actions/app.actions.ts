import { APP_TYPES } from '../action_types';
import { authApi } from '../../api';


export default {
    authCheck: () => {
        return async (dispatcher: any) => {
            try {
                dispatcher({
                    type: APP_TYPES.SET_LOADING_STATUS,
                    payload: true
                });

                const result = await authApi.isAuthorized(); 
                dispatcher({
                    type: APP_TYPES.SIGN_IN,
                    payload: {
                        user: result.user,
                        token: result.token,
                        isAuth: result.isAuth
                    }
                });

            } catch (err) {
                dispatcher({
                    type: APP_TYPES.SET_LOADING_STATUS,
                    payload: false
                });
            }
        }
    },

    signIn: ({ user, token, isAuth }: any) => {
        return {
            type: APP_TYPES.SIGN_IN,
            payload: {
                user,
                token,
                isAuth
            }
        }
    },

    logOut: () => {
        return {
            type: APP_TYPES.LOGOUT,
        };
    }
}