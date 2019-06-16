import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import ChannelItem from './ChannelItem';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%', 
        backgroundColor: theme.palette.background.paper,
    },
}));

export default ({ channels = [] }: any) => {
    const classes = useStyles();

    return (
        <List className={classes.root}>

            {
                channels.map((channel: any) => {
                    return (
                        <ChannelItem {...channel} />
                    )
                })
            }


        </List>
    );
}