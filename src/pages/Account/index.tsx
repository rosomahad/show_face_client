import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import useStyles from './account_page.style';
import Link from '../../components/Link';

export default () => {
    const classes = useStyles();

    return (
        <Container maxWidth={'md'}>
            <Grid container spacing={4}>

                <Grid xs={12} item>
                    <Grid container xs={12}>
                        <Paper elevation={2} className={classes.paper}>
                            <List
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader component="div" id="nested-list-subheader">Account</ListSubheader>
                                }

                            >
                                <ListItem>
                                    <ListItemText primary="Profile" />
                                </ListItem>

                            </List>


                        </Paper>
                    </Grid>
                </Grid>


            </Grid>
        </Container>
    )
}