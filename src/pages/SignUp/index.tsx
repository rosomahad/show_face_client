import React, { useState } from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import useStyles from './signup_page.style';
import { authApi } from '../../api';

import { withRouter, RouteComponentProps } from 'react-router-dom';

const SignUp = (props: RouteComponentProps) => {
    const classes = useStyles();

    const [credantials, setCredantials] = useState();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (credantials.password !== credantials.repassword) return;

        try {
            const result = await authApi.signUp(credantials);

            if (result.id) {
                props.history.push('/signin')
            }
        } catch (err) {
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
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>

                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>

                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                onChange={handleChange}
                                autoComplete="name"
                                name="fullName"
                                variant="outlined"
                                required
                                fullWidth
                                id="fullName"
                                label="Full Name"
                                autoFocus
                            />
                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <TextField
                                onChange={handleChange}
                                autoComplete="name"
                                name="nickName"
                                variant="outlined"
                                required
                                fullWidth
                                id="nickName"
                                label="Nickname"
                                autoFocus
                            />
                        </Grid>



                        <Grid item xs={12}>
                            <TextField
                                onChange={handleChange}
                                variant="outlined"
                                type='email'
                                required
                                fullWidth
                                id="email"
                                name="email"
                                label="Email Address"
                                autoComplete="email"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                onChange={handleChange}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                onChange={handleChange}
                                variant="outlined"
                                required
                                fullWidth
                                name="repassword"
                                label="Repeat Password"
                                type="password"
                                id="repassword"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}

                    >
                        Sign Up
                    </Button>

                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/signin" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>

                </form>
            </div>
        </Container>
    );
}

export default withRouter(SignUp);