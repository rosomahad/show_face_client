import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
    footer: {
        padding: theme.spacing(2),
        marginTop: 'auto',
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
        color: 'rgba(0, 0, 0, 0.87)',
        backgroundColor: '#f5f5f5'
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Typography variant="body1">Credantials</Typography>
            </Container>
        </footer>
    );
}