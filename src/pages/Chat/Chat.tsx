import React from 'react';
import Paper from '@material-ui/core/Paper';

import MessagesList from './MessagesList';
import ChatInput from './MessagesList';

export default function Chat(props: any) {
    return (
        <Paper elevation={2}>

            <MessagesList messages={[]} />
            <ChatInput />

        </Paper>
    );
}