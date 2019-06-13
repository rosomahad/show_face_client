import { APP_TYPES } from '../action_types';
import { authApi } from '../../api';


export default {
    setUser: (user: any) => {
        return {
            type: APP_TYPES.SET_USER,
            payload: user
        };
    },

    authCheck: () => {
        return async (dispatcher: any) => {
            try {
                dispatcher({
                    type: APP_TYPES.SET_LOADING_STATUS,
                    payload: true
                });

                const result = await authApi.isAuthorized();

                dispatcher({
                    type: APP_TYPES.SET_LOADING_STATUS,
                    payload: false
                });

                dispatcher({
                    type: APP_TYPES.SET_USER,
                    payload: {
                        user: result.user,
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

    logOut: () => {
        return {
            type: APP_TYPES.LOGOUT,
        };
    }
}