import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
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
    }
};

const UserItem = withStyles(stylesForMessage)(({ msg, classes }: any) => {
    const {
        creator,
        createdAt,
        message,
    } = msg;

    return (
        <Grid container justify="flex-start">
            <Avatar className={classes.avatar} alt={creator.userName} src={creator.avatarUrl} />

            <div>
                <Typography variant="body2" className={classes.userName}>
                    {creator.fullName}
                </Typography>
                <Typography variant="caption" className={classes.timestamp}>
                    {moment(createdAt).format("HH:mm")}
                </Typography>
                <Typography variant="body1" paragraph>
                    {message}
                </Typography>
            </div>
        </Grid>
    );
});

const stylesForMessageList = {};

const MessageList = withStyles(stylesForMessage)(({ users, classes }: any) => (
    <div className={classes.list} >
        {users.map((message: any) => <UserItem key={message.id} msg={message} />)}
    </div>
))

export default withStyles(stylesForMessageList)(MessageList);