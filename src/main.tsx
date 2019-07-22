import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { createHttpClient } from 'mst-gql';
import { RootStore, StoreContext } from './models';

// Styles
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// // Import Main styles for this application
import '../styles/scss/elements.scss';
import { App } from 'app';
import { Auth0Provider } from 'app/components/AuthWrapper';
import config from '../auth_config.json';

const rootStore = RootStore.create(undefined, {
    gqlHttpClient: createHttpClient('https://fantasy-exchange-api.herokuapp.com/v1/graphql'),
        // headers: {
            // authorization: session.getAccessToken().getJwtToken(),
            // 'x-api-key': 'da2-4j2ccn4hvncw7fzdi6pc6vywwi',
        // },
    // }),
});

const onRedirectCallback = (appState) => {
    window.history.replaceState(
        {},
        document.title,
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname,
    );
};

ReactDOM.render(
    <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
    >
        <StoreContext.Provider value={rootStore}>
            <Provider>
                <App />
            </Provider>,
        </StoreContext.Provider>,
    </Auth0Provider>,
    document.getElementById('root'),
);

// @ts-ignore
window.rootStore = rootStore;

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept('./app', () => renderApp());
}
