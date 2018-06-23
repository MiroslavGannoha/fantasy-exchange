import * as React from 'react';
// import { hot } from 'react-hot-loader';
import { Route, MobxRouter } from 'mobx-router';
// import { Router, /* Route, */ Switch, Redirect } from 'react-router-dom';
import { Root } from './containers/Root';
// import { TodoApp } from './views/TodoApp';
// import Login from './views/Login';
// import SignUp from './views/SignUp';
import MainLayout from './containers/MainLayout';
// import AuthLayout from './containers/AuthLayout';
import Overview from './views/Overview';
import Users from './views/Users';
import Settings from './views/Settings';
import Players from './views/Players';
import { UserComponent } from './components/RolesComponents';

// export const App = hot(module)(() => <Root><MobxRouter /></Root>);
export const App = () => <Root><MobxRouter /></Root>;

export const pages = {
    home: new Route({
        path: '/',
        component: <MainLayout component={Overview} />,
    }),
    players: new Route({
        path: '/players',
        component: <MainLayout component={Players} />,
        beforeEnter: (route, params, store) => {
            store.app.setTitle('AAAA');
            console.log('entering settings!');
            return false;
        },
        beforeExit: () => {
            console.log('exiting settings!');
        },
        onParamsChange: (route, params, store) => {
            console.log('params changed to', params);
        },
    }),
    overview: new Route({
        path: '/overview',
        component: <MainLayout component={Overview} />,
        onEnter: (route, params, store) => {
            store.app.setTitle('AAAA');
            console.log('entering settings!');
        },
        beforeExit: () => {
            console.log('exiting settings!');
        },
        onParamsChange: (route, params, store) => {
            console.log('params changed to', params);
        },
    }),
    users: new Route({
        path: '/users',
        component: <MainLayout component={Users} />,
        onEnter: (route, params, store) => {
            store.app.setTitle('AAAA');
            console.log('entering settings!');
        },
        beforeExit: () => {
            console.log('exiting settings!');
        },
        onParamsChange: (route, params, store) => {
            console.log('params changed to', params);
        },

    }),
    settings: new Route({
        path: '/settings',
        component: <MainLayout component={Settings} role={UserComponent}/>,
        beforeEnter: (route, params, store) => {
            store.app.setTitle('AAAA');
            console.log('entering settings!', store);
            // store.router.goTo(pages.overview, null, store);
            // return false;
        },
        beforeExit: () => {
            console.log('exiting settings!');
        },
        onParamsChange: (route, params, store) => {
            console.log('params changed to', params);
        },

    }),
};

// render react DOM
// export const App = hot(module)(({ history }) => (
//     <Root>
//         <Router history={history}>
//             <Switch>
//                 <MainLayout exact={true} path="/overview" component={Overview} />
//                 <MainLayout exact={true} path="/users" component={Users} />
//                 <MainLayout exact={true} path="/settings" component={Settings} />
//                 <MainLayout exact={true} path="/todoApp" component={TodoApp} />

//                 <AuthLayout exact={true} path="/login" component={Login} />
//                 <AuthLayout exact={true} path="/signUp" component={SignUp} />
//                 <Redirect from="/" to="/dashboard" />
//             </Switch>
//         </Router>
//     </Root>
// ));
