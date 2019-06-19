import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import MessagesList from './MessagesList';
import ChatInput from './ChatInput';

import { messagesApi } from '../../api';

const styles = (theme: any) => ({
    paper: {
        width: '100%',
        padding: '16px'
    },

});

class Chat extends React.Component<any> {
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
            if (!message) return;
            const { data } = await messagesApi.createByChatId(chatId, {
                message,
            });

            this.getMessages();

        } catch (error) {
            // TODO: 
        }
    }

    render() {
        const classes = this.props.classes;


        return (
            <Container maxWidth={'md'}>
                <Paper
                    className={classes.paper}
                    elevation={2} >
                
                        <Grid container>

                            <MessagesList messages={this.state.messages} />

                        </Grid>

                        <Grid container >

                            <ChatInput onSubmit={this.sendMessage} />

                        </Grid>
 
                </Paper>
            </Container>
        );
    }
}

export default withStyles(styles)(Chat);