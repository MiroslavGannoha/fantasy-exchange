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
import { Auth0Provider } from '../app/components/AuthWrapper';
import config from '../../auth_config.json';
import { authStore } from './stores';
import { RootStore, StoreContext } from '../models';
import { LoaderFullscreen } from './components/Loader';
import Page404 from './views/Page404';
import Settings from './views/Settings';

// export const App = hot(module)(() => <Root><MobxRouter /></Root>);

const mainLayoutRoutes = (
    <MainLayout>
        <Switch>
            <PrivateRoute path="/overview" component={Overview} exact={true} />
            <Route path="/players" component={Players} exact={true} />
            <PrivateRoute path="/settings" component={Settings} exact={true} />
            {/* <Route path="/user-login" component={AlreadyLoggedIn} /> */}
            {/* <Route path="/user-signup" component={AlreadyLoggedIn} /> */}
            {/* <Route path="/setToken" component={SetToken} /> */}
            {/* <Route path="/403" component={Page403} /> */}
            <Route path="/" component={Overview} exact={true} />
            <Route component={Page404} />
        </Switch>
    </MainLayout>
);

// const Routes = observer(() => mainLayoutRoutes);

const onRedirectCallback = (appState) => {
    window.history.replaceState(
        {},
        document.title,
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname,
    );
};

const RoutesWithStores = observer(() => {
    if (authStore.loading) {
    // if (authStore.loading || !authStore.isAuthed) {
        return <LoaderFullscreen />;
    }

    if (authStore.httpClient) {
        const rootStore = RootStore.create(undefined, {
            gqlHttpClient: authStore.httpClient,
        });

        // @ts-ignore
        window.rootStore = rootStore;
        return (
            <StoreContext.Provider value={rootStore}>
                {mainLayoutRoutes}
            </StoreContext.Provider>
        );
    }
});

export const App = () => (
    <BrowserRouter>
        <RootContainer>
            <Auth0Provider
                domain={config.domain}
                client_id={config.clientId}
                redirect_uri={window.location.origin}
                onRedirectCallback={onRedirectCallback}
                audience={config.audience}
            >
                <RoutesWithStores />
            </Auth0Provider>
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
