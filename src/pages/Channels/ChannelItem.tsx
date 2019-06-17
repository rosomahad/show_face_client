import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { Link } from 'react-router-dom';

import AccountBoxIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline'
    },
}));

export default (props: any) => {
    const classes = useStyles();

    return (
        <>
            <Divider variant="inset" component="li" />
            
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://cdn4.iconfinder.com/data/icons/vectory-bonus-3/40/channel_rss-512.png" />
                </ListItemAvatar>
                <ListItemText
                    primary={props.name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                Creator:
                            </Typography>
                        </React.Fragment>
                    }
                />

                <Link to={'channels/' + props.id}>
                    <IconButton>
                        <AccountBoxIcon />
                    </IconButton>
                </Link>
            </ListItem>
        </>
    )
}