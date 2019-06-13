import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import PublicRouters from './public.routers';
import PrivateRouters from './private.routers';
import { isAuthorized } from './access.middlware';

export default () => {
    return (
        <Router basename={'/'}>
            {
                isAuthorized() ?
                    <PrivateRouters />
                    :
                    <PublicRouters />
            }
        </Router>
    )
}