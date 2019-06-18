import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ChatIcon from '@material-ui/icons/Chat';
import MenuIcon from '@material-ui/icons/Menu';
import PeopleIcon from '@material-ui/icons/People';
import ExitIcon from '@material-ui/icons/ExitToApp';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FriendsIcon from '@material-ui/icons/NaturePeople';

import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import { Link as RouterLink } from 'react-router-dom';

import { connect } from 'react-redux';

import useStyles from './styles/navigation.style';
import { appActions } from '../../store/actions';

const Links = [
    {
        to: '/account',
        Icon: AccountBoxIcon,
        label: 'Account'
    },

    {
        to: '/channels',
        Icon: VideoCallIcon,
        label: 'Channels'
    },

    {
        to: '/chats',
        Icon: ChatIcon,
        label: 'Chats'
    },

    {
        to: '/users',
        Icon: PeopleIcon,
        label: 'Users'
    }, {
        to: '/friends',
        Icon: FriendsIcon,
        label: 'Friends'
    },
]

function Navigation(props: any) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);


    function toggleDrawer() {
        setOpen(!open);
    }

    return (
        <>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar className={classes.toolbar}>

                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={toggleDrawer}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h5" noWrap>  Show Face </Typography>

                    <div className={classes.toolbar_right_menu}>
                        <div className={classes.toolbar_right_user}>

                            <Typography variant="h6" noWrap>
                                {props.userName}
                            </Typography>

                            <Avatar
                                alt="Remy"
                                src="https://pixel.nymag.com/imgs/daily/vulture/2018/11/02/02-avatar-2.w700.h700.jpg"
                                className={classes.avatar}
                            />
                        </div>


                        <IconButton
                            color="inherit"
                            aria-label="Exit"
                            edge="start"
                            onClick={props.logOut}
                        >
                            <ExitIcon />
                        </IconButton>
                    </div>
                </Toolbar>


            </AppBar>


            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                open={open}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={toggleDrawer}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />

                <List>
                    {Links.map(({ label, to, Icon }, index) => (
                        <ListItem component={RouterLink} to={to} button key={to}>
                            <ListItemIcon>{<Icon />}</ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItem>
                    ))}
                </List>

            </Drawer>
        </>
    );
}


export default connect(({ appStore }: any) => {
    return ({ userName: appStore.user && appStore.user.fullName })
}, {
        logOut: appActions.logOut
    })(Navigation);