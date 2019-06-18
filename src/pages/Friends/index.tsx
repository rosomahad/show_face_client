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

import styles from './friends_page.style';


import { usersApi } from '../../api';

import FriendsList from './FriendsList';

import Link from '../../components/Link';

class FriendsPage extends React.Component<any, any> {
    state = {
        users: []
    }

    async componentDidMount() {
        try {
            const { rows, count } = await usersApi.findByQuery();

            this.setState({
                users: rows,
            })
        } catch (err) {
            // TODO: 
        }
    }

    render() {

        const classes = this.props.classes;

        return (
            <Container maxWidth="md">
                <Grid container>

                    <Paper elevation={2} className={classes.paper}>
                        <div className={classes.paper_header}>
                            <Typography variant="h5">Users</Typography>

                        </div>
                        <Divider />

                        <FriendsList users={this.state.users} />
                    </Paper>

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
)(FriendsPage);