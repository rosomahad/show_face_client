import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/home';

export default () => (
    <Router basename={'/'}>
        <Switch>
            <Route exact={true} path={'/'} component={HomePage} />
        </Switch>
    </Router>
)