import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { publicRouters } from './routers';
import NotFoundPage from '../pages/NotFound';


export default () => (
    <Switch>
        {
            publicRouters.map(({ path, component, exact }) => (
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