import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import CreateButton from '@material-ui/icons/AddCircleOutlineSharp';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import Link from '../../components/Link';

import styles from './chat_page.style';

import ChatUsersList from './ChatUsersList';

import Chat from './Chat';

import { chatsApi } from '../../api';


class ChatPage extends React.Component<any> {
    state = {
        chats: [],
        chatId: undefined,
    }

    async componentDidMount() {
        const chatId = this.props.match.params.chatId;

        if (chatId) {
            this.setState(() => ({
                chatId
            }))
        }

        const { data } = await chatsApi.findAllByUserId(this.props.user.id);

        this.setState(() => ({
            chats: data.rows,
        }))
    }

    findAllChats = async () => {
        try {
            const { data } = await chatsApi.findAllByUserId(
                this.props.user.id
            );

            return data;

        } catch (error) {
            // TODO: 
        }
    }

    render() {
        const classes = this.props.classes;

        return (
            <Container maxWidth={false}>
                <Grid container spacing={4}>

                    <Grid xs={3} item>
                        <Grid container xs={12}>
                            <Paper elevation={2} className={classes.paper}>


                                <Typography className={classes.paper_header} variant="h5">Chats</Typography>

                                <Divider />

                                <ChatUsersList
                                    chats={this.state.chats}
                                />

                            </Paper>
                        </Grid>
                    </Grid>


                    <Grid item xs={9}>
                        {
                            this.state.chatId && (
                                <Chat
                                    chatId={this.state.chatId}
                                />
                            )
                        }
                    </Grid>

                </Grid>
            </Container>
        )
    }
}


const storeStateToProps = ({ appStore }: any) => ({ user: appStore.user });

export default compose(
    connect(storeStateToProps, null),
    withStyles(styles),
    withRouter
)(ChatPage);