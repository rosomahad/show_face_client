import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";

import moment from "moment";

const stylesForMessage = {
    avatar: { maxWidth: 32, maxHeight: 32, marginRight: 5 },
    userName: {
        display: "inline-block",
        marginRight: 5,
    },
    timestamp: { display: "inline-block" },
    list: {
        maxHeight: '600px',
        overflow: 'auto'
    },
    grid: {
        marginTop: '16px'
    }
};

const UserItem = withStyles(stylesForMessage)(({ chat, classes }: any) => {
    const {
        firstMember
    } = chat;

    return (
        <ListItem component={Link} to={'/chats/' + firstMember.id} key={firstMember.id} button>
            <ListItemAvatar>
                <Avatar
                    alt={`Avatar n°${firstMember.id}`}
                    src={`/static/images/avatar/${firstMember.id + 1}.jpg`}
                />
            </ListItemAvatar>
            <ListItemText id={firstMember.id} primary={firstMember.fullName} />
        </ListItem>
    );
});

const stylesForMessageList = {};

const MessageList = withStyles(stylesForMessage)(({ chats, classes }: any) => (
    <List dense className={classes.list} >
        {chats.map((chat: any) => <UserItem key={chat.id} chat={chat} />)}
    </List>
))

export default withStyles(stylesForMessageList)(MessageList);