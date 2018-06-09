import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { createBrowserHistory } from 'history';
// import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { pages, App } from './app';
import { TodoModel } from './app/models';
import { createStores, Stores } from './app/stores';
import { startRouter } from 'mobx-router';

// Styles
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// // Import Main styles for this application
import '../styles/scss/elements.scss';
// // Temp fix for reactstrap
// import '../scss/core/_dropdown-menu-right.scss';

// enable MobX strict mode
// useStrict(true);

// default fixtures for TodoStore
const defaultTodos = [
    new TodoModel('Use Mobx'),
    new TodoModel('Use React', true),
];

// prepare MobX stores
// const history = createBrowserHistory();
const stores = createStores(defaultTodos);

startRouter(pages, stores[Stores.APP]);

ReactDOM.render(
    <Provider {...stores}>
        <App />
        {/* <App history={history} /> */}
    </Provider>,
    document.getElementById('root'),
);
