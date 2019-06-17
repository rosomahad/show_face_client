import UserPage from '../pages/User';
import UsersPage from '../pages/Users';

import HomePage from '../pages/Home';
import AccountPage from '../pages/Account';
import ChatPage from '../pages/Chat';
import FriendsPage from '../pages/Friends';

import Channel from '../pages/Channel';
import Channels from '../pages/Channels';
import ChannelCreate from '../pages/ChannelCreate';

import IntroductionPage from '../pages/Introduction';

import SignUpPage from '../pages/SignUp';
import SignInPage from '../pages/SignIn';
import Friends from '../pages/Friends';


interface IRoute {
    path: string,
    component: any,
    exact?: boolean,
}

const privateRouters: IRoute[] = [
    {
        path: '/',
        exact: true,
        component: HomePage,
    },

    {
        path: '/account',
        component: AccountPage,
    },

    {
        path: '/users',
        exact: true,
        component: UsersPage,
    },

    {
        path: '/users/:userId',
        component: UserPage,
    },

    {
        path: '/channels',
        exact: true,
        component: Channels,
    },

    {
        path: '/channels/create',
        exact: true,
        component: ChannelCreate,
    },

    {
        path: '/channels/:channelId',
        component: Channel,
    },

    {
        path: '/friends',
        component: FriendsPage,
    },

    {
        path: '/chat',
        component: ChatPage,
    },

    {
        path: '/chat/:chatId',
        component: ChatPage,
    },
]

const publicRouters: IRoute[] = [
    {
        path: '/',
        exact: true,
        component: IntroductionPage,
    },
    {
        path: '/signin',
        component: SignInPage,
    },
    {
        path: '/signup',
        component: SignUpPage,
    },
]

export {
    privateRouters,
    publicRouters
}