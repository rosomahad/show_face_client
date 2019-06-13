import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { privateRouters } from './routers';
import NotFoundPage from '../pages/NotFound';
import MainContainer from '../components/Main/MainContainer';

export default () => (
    <MainContainer>
        <Switch>

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

            <Redirect from="/signin" to="/" />
            <Redirect from="/signup" to="/" />

            <Route
                component={NotFoundPage}
                exact={true}
                key={'not_found'}
                path={'*'}
            />
        </Switch>
    </MainContainer>
)