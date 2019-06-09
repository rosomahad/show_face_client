import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers';

// DEVTOOLS
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { createLogger } from 'redux-logger';

const logger = createLogger({
    collapsed: true,
    duration: true,
    timestamp: false,
});

const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') {
        return {};
    } else {
        // Enable additional logging in non-production environments.
        return applyMiddleware(logger);
    }
};

const middlwere: any = composeWithDevTools(
    getMiddleware(),
);

export const store = createStore(reducer, {}, middlwere);