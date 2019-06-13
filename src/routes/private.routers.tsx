import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { privateRouters } from './routers';
import NotFoundPage from '../pages/NotFound';

export default () => (
    <Switch>
        <Redirect from="/login" to="/" />
        <Redirect from="/registration" to="/" />

        {
            privateRouters.map(({ path, component, exact }) => (
                <Route
                    component={component}
                    exact={exact}
                    path={path}
                    key={path}
                />
            ))
        }

        <Route
            component={NotFoundPage}
            exact={true}
            key={'not_found'}
            to={'*'}
        />
    </Switch>
)