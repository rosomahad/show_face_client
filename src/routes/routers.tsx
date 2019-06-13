import UserPage from '../pages/User';
import HomePage from '../pages/Home';
import AccountPage from '../pages/Account';
import ConferencePage from '../pages/Conference';


import IntroductionPage from '../pages/Introduction';
import RegistrationPage from '../pages/Registration';
import LoginPage from '../pages/Login';


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
        path: '/conference/:id',
        component: ConferencePage,
    },

    {
        path: '/user/:id',
        component: UserPage,
    },
]

const publicRouters: IRoute[] = [
    {
        path: '/',
        exact: true,
        component: IntroductionPage,
    },
    {
        path: '/registration',
        component: RegistrationPage,
    },
    {
        path: '/login',
        component: LoginPage,
    },
]

export {
    privateRouters,
    publicRouters
}