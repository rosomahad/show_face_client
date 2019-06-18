import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import List from '@material-ui/core/List';

import ListItem from './ListItem';
import { chatsApi, } from '../../../api';
import { connect } from 'react-redux';

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


export default connect(({ appStore }: any) => ({ senderId: appStore.user.id }))(withRouter(({ users = [], senderId, history }: any) => {

    const classes = useStyles();

    const goToChat = async (receiverId: number) => {
        try {
            const { data: chat } = await chatsApi.findByMembers(senderId, receiverId);


            history.push('/chats/' + chat.id);

        } catch (error) {

        }
    }

    return (
        <List className={classes.root}>
            {
                users.map((user: any) => {

                    return (
                        <ListItem user={user} goToChat={goToChat} />
                    )
                })
            }
        </List>
    );
}));