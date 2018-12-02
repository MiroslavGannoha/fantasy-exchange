import * as React from 'react';
// import { hot } from 'react-hot-loader';
import { Route, MobxRouter } from 'mobx-router';
import { ToastContainer } from 'react-toastify';
import { Root } from './containers/Root';
import { UserComponent } from './components/RolesComponents';
import MainLayout from './containers/MainLayout';
import Overview from './views/Overview';
import Users from './views/Users';
import CRUD from './views/CRUD';
import Settings from './views/Settings';
import Players from './views/Players';
import Rights from './views/Rights';
import Market from './views/Market';
import SignUp from './views/SignUp';

// export const App = hot(module)(() => <Root><MobxRouter /></Root>);
export const App = () => (
    <Root>
        <MobxRouter />
        <ToastContainer />
    </Root>
);

export const pages = {
    home: new Route({
        path: '/',
        component: <MainLayout component={Overview} />,
    }),
    overview: new Route({
        path: '/overview',
        component: <MainLayout component={Overview} />,
    }),
    market: new Route({
        path: '/market',
        component: <MainLayout component={Market} />,

    }),
    crud: new Route({
        path: '/crud',
        component: <MainLayout component={CRUD} />,

    }),
    users: new Route({
        path: '/users',
        component: <MainLayout component={Users} />,
    }),
    settings: new Route({
        path: '/settings',
        component: <MainLayout component={Settings} role={UserComponent}/>,
    }),
    signUp: new Route({
        path: '/signup',
        component: <MainLayout component={SignUp}  />,
    }),
    rights: new Route({
        path: '/rights',
        component: <MainLayout component={Rights} />,
    }),
    players: new Route({
        path: '/players',
        component: <MainLayout component={Players} />,
        beforeEnter: (route, params, store) => {
            store.app.setTitle('AAAA');
            console.log('entering players!');
            // return false;
        },
        beforeExit: () => {
            console.log('exiting players!');
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
