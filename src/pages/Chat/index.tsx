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

class ChatPage extends React.Component<any> {
    state = { users: [] }

    componentDidMount() {
        const chatId = this.props.match.params.chatId;
        if (chatId) {

        }
    }

    render() {
        const classes = this.props.classes;

        return (
            <Container maxWidth={false}>
                <Grid container spacing={4}>

                    <Grid xs={4} item>
                        <Grid container xs={12}>
                            <Paper elevation={2} className={classes.paper}>

                                <div className={classes.paper_header}>
                                    <Typography variant="h5">Chat</Typography>
                                </div>
                                <Divider />


                                <ChatUsersList
                                    users={this.state.users}
                                />

                            </Paper>
                        </Grid>
                    </Grid>


                    <Grid item xs={8}>
                        <Grid container xs={12}  >
                            <Chat
                                chatId={1}
                            />
                        </Grid>
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