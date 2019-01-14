import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { useStrict } from 'mobx';
// @ts-ignore
// import firebase from 'firebase/app';
// import { initFirestorter } from 'firestorter';
import { Provider } from 'mobx-react';
import { pages, APP } from './app';
import { createStores, IStores } from './app/stores';
import { startRouter } from 'mobx-router';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
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

// prepare MobX stores
// const history = createBrowserHistory();
Amplify.configure(aws_exports);

const stores: IStores = createStores();

startRouter(pages, stores.store);

ReactDOM.render(
    <Provider {...stores} >
        <APP />
        {/* <App history={history} /> */}
    </Provider>,
    document.getElementById('root'),
);
