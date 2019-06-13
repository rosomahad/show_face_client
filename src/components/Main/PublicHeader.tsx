import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
        ul: {
            margin: 0,
            padding: 0,
        },
        li: {
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor: theme.palette.grey[200],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
}));


export default function ButtonAppBar() {
    const classes = useStyles();
    return (
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>

                <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                    <Link
                        color="textPrimary"
                        href="/"

                    >Show Face</Link>

                </Typography>

                <nav>
                    <Link
                        variant="button"
                        color="textPrimary"
                        href="/"
                        className={classes.link}
                    > Home </Link>
                </nav>

                <Button href="/signin" color="primary" variant="outlined" className={classes.link}>
                    Sign In
                    </Button> <Button href="/signup" color="primary" variant="outlined" className={classes.link}>
                    Sign Up
                    </Button>

            </Toolbar>
        </AppBar>
    );
}