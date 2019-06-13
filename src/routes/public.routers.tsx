import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { publicRouters } from './routers';
import NotFoundPage from '../pages/NotFound';
import PublicHeader from '../components/Main/PublicHeader';
import Footer from '../components/Main/Footer';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
}));


export default () => {
    const classes = useStyles();

    return (
        <Grid container={true} direction="column" className={classes.root}>
            <PublicHeader />

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
            </Switch>
            <Footer />
        </Grid>
    )
}