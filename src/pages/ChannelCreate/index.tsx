import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import styles from './create_channel.style';

import { channelsApi } from '../../api';

class Channel extends React.Component<any, any> {

    state = {
        name: ''
    }

    componentDidMount() {

    }

    handleChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value });
    }; 
    
    handleSubmit = async (event: any) => {
        event.preventDefault();

        const values = {
            name: this.state.name,
        }

        try {
            const response = await channelsApi.create(values);
            
            this.props.history.push('/channels');
        } catch(err) {
            // TODO: 
        }
    };


    render() {

        const classes = this.props.classes;

        return (
            <Grid item xs={12}>
                <Container maxWidth="md">
                   <Paper>

                  

                    <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <div>
                        Create Channel
    
                    <Button  type="submit" variant="outlined">Create</Button>
                    </div>

                        <TextField
                            name="name"
                            label="Channel name"
                            className={classes.textField}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                        />

                    </form>
                   </Paper>
                </Container>
            </Grid>
        )
    }
}

const storeStateToProps = ({ appStore }: any) => ({ user: appStore.user });

export default compose(
    connect(storeStateToProps, null),
    withStyles(styles),
    withRouter
)(Channel);