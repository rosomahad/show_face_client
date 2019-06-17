import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { privateRouters } from './routers';
import NotFoundPage from '../pages/NotFound';
import MainContainer from '../components/Main/MainContainer';

export default class PrivateRoutes extends React.Component {
    render() {

        return (
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

                    <Redirect from="/signin" exact={true} to="/" />
                    <Redirect from="/signup" exact={true} to="/" />


                </Switch>
            </MainContainer>
        )
    }
}