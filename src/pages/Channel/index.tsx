import React from 'react';


import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import Chat from '../../components/Chat';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));


export default () => {
    const videos = [
        'http://localhost:8000/api/v1/videos/1',
        'http://localhost:8000/api/v1/videos/1',
    ]
    const classes = useStyles();


    return (
        <Grid item xs={12}>
            <Grid container justify="center" spacing={6}>

                <Grid xs={9} item>
                    <Grid container xs={12} spacing={2}>
                        {
                            videos.map((src) => (
                                <Grid item xs={6}>
                                    <video
                                        key="video2"
                                        autoPlay={true}
                                        src={src}
                                        muted={true}
                                        playsInline={true}
                                        style={{
                                            width: '100%',
                                            height: 'auto'
                                        }}
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>

                <Grid xs={3} item>

                    <div>
                        <Button fullWidth variant="contained" className={classes.button}>Connect</Button>

                        <Button fullWidth variant="contained" className={classes.button}>disconnect</Button>
                    </div>

                </Grid>
            </Grid>
        </Grid>
    )
}