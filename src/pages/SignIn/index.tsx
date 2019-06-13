import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { withRouter, RouteComponentProps } from 'react-router-dom';


import FormControlLabel from '@material-ui/core/FormControlLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import useStyles from './signIn.style';
import { appActions } from '../../store/actions';

import { authApi } from '../../api';

interface ISignInProps extends RouteComponentProps {
    setUser: (user: any) => void
}

const SignIn = (props: ISignInProps) => {
    const classes = useStyles();

    const [credantials, setCredantials] = useState();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const result = await authApi.signIn(credantials);

            props.setUser(result.user)

            if (result.id) {
                props.history.push('/')
            }
        } catch (err) {
            console.log(err);
            // TODO: 
        }
    }

    const handleChange = (e: any) => {
        setCredantials({
            ...credantials,
            [e.target.id]: e.target.value
        })
    }

    return (
        <Grid container component="main" className={classes.main}>
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper}>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <TextField
                            onChange={handleChange}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            onChange={handleChange}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="/restore_password" variant="body2">
                                    Forgot password?
                                 </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>

                    </form>
                </div>
            </Grid>
        </Grid>
    );
}

const mapDispatchToProps = { setUser: appActions.setUser }

export default compose(withRouter, connect(
    null,
    mapDispatchToProps
),
)(SignIn);