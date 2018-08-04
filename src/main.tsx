import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { useStrict } from 'mobx';
// @ts-ignore
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/functions';
// import { initFirestorter } from 'firestorter';
import { Provider } from 'mobx-react';
import { pages, App } from './app';
import { createStores, IStores } from './app/stores';
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

// Initialize firebase app
// firebase.initializeApp({
//     apiKey: 'AIzaSyD94yAtoXu1JWEm635t-d53BGO1AMo1-WU',
//     authDomain: 'fantasy-exchange.firebaseapp.com',
//     databaseURL: 'https://fantasy-exchange.firebaseio.com',
//     projectId: 'fantasy-exchange',
//     storageBucket: 'gs://fantasy-exchange.appspot.com',
//     messagingSenderId: '117336781687',
// });

// Initialize `firestorter`
// initFirestorter({ firebase });

// enable MobX strict mode
// useStrict(true);

// prepare MobX stores
// const history = createBrowserHistory();
const stores: IStores = createStores();

startRouter(pages, stores.store);

ReactDOM.render(
    <Provider {...stores}>
        <App />
        {/* <App history={history} /> */}
    </Provider>,
    document.getElementById('root'),
);
