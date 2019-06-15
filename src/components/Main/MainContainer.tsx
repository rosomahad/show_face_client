import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navigation from './Navigation';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default (props: any) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Navigation />

            <main className={classes.content}>
                <div className={classes.toolbar} />
                {
                    props.children
                }
            </main>
        </div>
    );
}