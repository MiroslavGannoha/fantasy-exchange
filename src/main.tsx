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

const rootStore = RootStore.create(undefined, {
    gqlHttpClient: createHttpClient('https://fantasy-exchange-api.herokuapp.com/v1/graphql'),
        // headers: {
            // authorization: session.getAccessToken().getJwtToken(),
            // 'x-api-key': 'da2-4j2ccn4hvncw7fzdi6pc6vywwi',
        // },
    // }),
});

ReactDOM.render(
    <StoreContext.Provider value={rootStore}>
        <Provider>
            <App />
        </Provider>,
    </StoreContext.Provider>,

    document.getElementById('root'),
);

// @ts-ignore
window.rootStore = rootStore;

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept('./app', () => renderApp());
}
