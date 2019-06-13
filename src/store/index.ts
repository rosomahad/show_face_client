import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

const logger = createLogger({
    collapsed: true,
    duration: true,
    timestamp: false,
});

const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(thunk);
    } else {
        return applyMiddleware(thunk, logger);
    }
};

const middlwere: any = composeWithDevTools(
    getMiddleware(),
);

export const store = createStore(rootReducer, middlwere);