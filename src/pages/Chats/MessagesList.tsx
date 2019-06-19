import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
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
        width: '100%',
        overflow: 'auto'
    }
};

const Message = withStyles(stylesForMessage)(({ msg, classes }: any) => {
    const {
        creator,
        createdAt,
        message,
    } = msg;

    return (
        <>
            <Grid item justify="flex-start" className={classes.list}>

                <Grid container justify="flex-start"  >
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

            </Grid>

        </>
    );
});

const stylesForMessageList = {};

const MessageList = withStyles(stylesForMessage)(({ messages = [], classes }: any) => (
    <div className={classes.list} >
        {messages.map((message: any) => <Message key={message.id} msg={message} />)}
    </div>
))

export default withStyles(stylesForMessageList)(MessageList);