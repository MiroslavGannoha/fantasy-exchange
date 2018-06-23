import { computed, observable, action } from 'mobx';
import MobxReactForm from 'mobx-react-form';
import * as moment from 'moment';
// @ts-ignore
import firebase from 'firebase/app';
import 'firebase/auth';
import { User, /* FirebaseAuth */ UserInfo } from '@firebase/auth-types';
import { fields, plugins } from './loginForm';

export class AuthStore {
    public loginForm: MobxReactForm = null;

    @observable public userInfo: UserInfo = {
        displayName: '',
        email: '',
        phoneNumber: '',
        photoURL: '',
        providerId: '',
        uid: '',
    };

    @observable
    public auth: any = null;

    @observable
    public userLoading: boolean = true;

    @observable private currentUser: User = null;

    constructor() {
        this.auth = firebase.auth();

        this.loginForm = new MobxReactForm({ fields }, { plugins, hooks: {
            onSuccess: (form) => {
                const {email, password} = form.values();
                this.login(email, password);
            },
        }});

        this.auth.onAuthStateChanged((user) => this.onAuthStateChanged(user));
    }

    public login(email: string, password: string) {
        this.userLoading = true;
        this.auth.signInWithEmailAndPassword(email, password).catch((error) => {
            error ? console.log(error) : console.log('success');
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // ...
        });
    }

    @action
    public logout() {
        this.auth.signOut();
    }

    @computed
    public get userName(): string {
        return this.userInfo ? this.userInfo.displayName : '';
    }

    @computed
    public get isLoggedIn(): boolean {
        return !!this.currentUser;
    }

    @computed
    public get userCreated() {
        if (!this.currentUser) {
            return '';
        }
        return moment(this.currentUser.metadata.creationTime).format('DD MMM YYYY');
    }

    @computed
    public get lastVisit() {
        if (!this.currentUser) {
            return '';
        }
        return moment(this.currentUser.metadata.lastSignInTime).fromNow();
    }

    @action
    public onAuthStateChanged(user: User) {
        this.userLoading = false;
        if (user) {
            console.log('onauthstatechange SIGN IN');
            this.currentUser = user;
            this.userInfo = user.providerData[0];
            user.getIdTokenResult()
                .then((idTokenResult) => {
                    console.log(idTokenResult);
                    // Confirm the user is an Admin.
                    // if (!!idTokenResult.claims.admin) {
                    // Show admin UI.
                    // showAdminUI();
                    // } else {
                    // Show regular user UI.
                    // showRegularUI();
                    // }
                });
        } else {
            console.log('onauthstatechange SIGN OUT');
            this.currentUser = null;
            this.userInfo = {
                displayName: '',
                email: '',
                phoneNumber: '',
                photoURL: '',
                providerId: '',
                uid: '',
            };
        }
    }

            // FirebaseUI config.
// const uiConfig = {
    // callbacks: {
//         signInSuccessWithAuthResult: (authResult, redirectUrl) => {
//             const user = authResult.user;
//             console.log('user', user);
//             // var credential = authResult.credential;
//             // var isNewUser = authResult.additionalUserInfo.isNewUser;
//             // var providerId = authResult.additionalUserInfo.providerId;
//             // var operationType = authResult.operationType;
//             // Do something with the returned AuthResult.
//             // Return type determines whether we continue the redirect automatically
//             // or whether we leave that to developer to handle.
//             return false;
//         },
//     },
//     signInSuccessUrl: '/overview',
//     signInFlow: 'popup',
//     signInOptions: [
//         // Leave the lines as is for the providers you want to offer your users.
//         firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     ],
//     // Terms of service url.
//     tosUrl: '/overview',
// };
}

export default AuthStore;
