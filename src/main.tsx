import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

// Styles
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// // Import Main styles for this application
import '../styles/scss/elements.scss';
import { App } from 'app';

const renderApp = () => (
    ReactDOM.render(
        <Provider>
            <App />
        </Provider>,
        document.getElementById('root'),
    )
);
renderApp();
// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept('./app', () => renderApp());
}
