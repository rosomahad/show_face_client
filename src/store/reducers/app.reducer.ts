import { APP_TYPES } from '../action_types';

const defaultState = {
    user: undefined,
    token: '',
    isAuth: false,
    isLoading: false,
};

export default (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case APP_TYPES.SIGN_IN: {
            sessionStorage.setItem('token', action.payload.token)

            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isAuth: action.payload.isAuth,
                isLoading: false
            }
        }

        case APP_TYPES.SET_LOADING_STATUS: {
            return {
                ...state,
                isLoading: action.payload,
            }
        }

        case APP_TYPES.LOGOUT: {
            return {
                ...state,
                user: undefined,
                isAuth: false,
            }
        }

        default:
            return state;
    }
};