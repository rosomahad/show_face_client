import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import PublicRouters from './public.routers';
import PrivateRouters from './private.routers';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { appActions } from '../store/actions';

const App = (props: any) => {

    useEffect(() => {
        props.authCheck();
    }, [props.count]);

    if (props.isLoading) {
        return <Loading />
    }

    return (
        <Router basename={'/'}>
            {
                props.isAuth ?
                    <PrivateRouters />
                    :
                    <PublicRouters />
            }
        </Router>
    )
};

export default connect(({ appStore }: any) => ({
    isAuth: appStore.isAuth,
    isLoading: appStore.isLoading
}), { authCheck: appActions.authCheck })(App);

