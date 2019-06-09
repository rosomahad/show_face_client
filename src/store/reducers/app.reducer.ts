

import { APP_TYPES } from '../action_types';

const defaultState = {

};

export default (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        default:
            return state;
    }
};