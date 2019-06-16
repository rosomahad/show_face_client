import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import styles from './channels.style';

import ChannelsList from './ChannelsList';
import { channelsApi } from '../../api';

import Link from '../../components/Link';

class Channel extends React.Component<any, any> {
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
                <Grid container spacing={6}>
                    <div>
                        <Link to="/channels/create">
                            <Button color="primary" variant="outlined" className={classes.link}>
                                Create
                            </Button>
                        </Link>
                    </div>
                    <Paper elevation={2} style={{ padding: 20, width: '100%' }}>
                        <ChannelsList
                            channels={this.state.channels}
                        />
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
)(Channel);