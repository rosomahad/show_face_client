import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import MessagesList from './MessagesList';
import ChatInput from './ChatInput';

import { messagesApi } from '../../api';


export default class Chat extends React.Component<any> {
    state = {
        messages: []
    }

    async componentDidMount() {
        this.getMessages();
    }
    getMessages = async () => {
        const chatId = this.props.chatId;


        try {
            const { data } = await messagesApi.findByChatId(chatId);

            this.setState({
                messages: data.rows,
            })

        } catch (error) {
            // TODO: 
        }
    }

    sendMessage = async (message: string) => {
        const chatId = this.props.chatId;

        try {
            const { data } = await messagesApi.createByChatId(chatId, {
                message,
            });

            this.getMessages();

        } catch (error) {
            // TODO: 
        }
    }

    render() {
        return (
            <Paper elevation={2} style={{ width: '100%', height: '100%' }}>
                <Grid container>
                    <Grid item xs={9}>
                        <MessagesList messages={this.state.messages} />
                    </Grid>
                    <Grid item xs={9}>

                        <ChatInput onSubmit={this.sendMessage} />
                    </Grid>
                </Grid>


            </Paper>
        );
    }
}