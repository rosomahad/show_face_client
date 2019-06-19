import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import ListItem from './ListItem';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
})); 


export default ({ users = [] }: any) => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {
                users.map((user: any) => {

                    return (
                        <ListItem user={user} />
                    )
                })
            }
        </List>
    );
}