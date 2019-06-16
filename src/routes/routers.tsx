import UserPage from '../pages/User';
import HomePage from '../pages/Home';
import AccountPage from '../pages/Account';
import ConferencePage from '../pages/Conference';


import Channel from '../pages/Channel';
import Channels from '../pages/Channels';
import ChannelCreate from '../pages/ChannelCreate';

import IntroductionPage from '../pages/Introduction';
import SignUpPage from '../pages/SignUp';
import SignInPage from '../pages/SignIn';


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
        path: '/user/:userId',
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
        path: '/conference/:conferenceId',
        component: ConferencePage,
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