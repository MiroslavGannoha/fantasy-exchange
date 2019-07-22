import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// import { hot } from 'react-hot-loader';
import { RootContainer } from './containers/Root';
import MainLayout from './containers/MainLayout';
import Overview from './views/Overview';
import Players from './views/Players';
// import Rights from './views/Rights';
import { observer } from 'mobx-react';
import PrivateRoute from './components/PrivateRoute';

// export const App = hot(module)(() => <Root><MobxRouter /></Root>);

const mainLayoutRoutes = (
    <MainLayout>
        <Switch>
                <Redirect from="/" to="/overview" />
                <PrivateRoute path="/overview" component={Overview} exact={true} />
                <Route path="/players" component={Players} exact={true} />
                {/* <Route path="/user-login" component={AlreadyLoggedIn} /> */}
                {/* <Route path="/user-signup" component={AlreadyLoggedIn} /> */}
                {/* <Route path="/setToken" component={SetToken} /> */}
                {/* <Route path="/403" component={Page403} /> */}
                {/* <Route component={Page404} /> */}
        </Switch>
    </MainLayout>
);

const Routes = observer(() => mainLayoutRoutes);

export const App = () => (
    <BrowserRouter>
        <RootContainer>
            <Routes />
        </RootContainer>
    </BrowserRouter>
);

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
