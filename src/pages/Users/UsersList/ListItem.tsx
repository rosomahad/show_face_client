import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    inline: {
        display: 'inline',
    },
}));

export default ({ user }: any) => {
    const classes = useStyles();

    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>

            <ListItemText
                primary={user.fullName}
            />

            <Button color="secondary" variant="outlined" >Add friend</Button>
        </ListItem>
    );
}
