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


import { channelsApi } from '../../api';

import Link from '../../components/Link';

class FriendsPage extends React.Component<any, any> {
    state = {
        channels: []
    }

    async componentDidMount() {
        try {
            const { data } = await channelsApi.findByQuery();

            const { rows, count } = data.data;

            this.setState({
                channels: rows,
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
                            <Typography variant="h5">Friends</Typography>

                            <Link to="/channels/create">
                                <IconButton size="medium" className={classes.link}>
                                    <CreateButton />
                                </IconButton>
                            </Link>
                        </div>
                        <Divider />

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