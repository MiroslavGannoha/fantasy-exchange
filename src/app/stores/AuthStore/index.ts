import { computed, observable, action } from 'mobx';
import MobxReactForm from 'mobx-react-form';
import * as moment from 'moment';
// @ts-ignore
import firebase from 'firebase/app';
// @ts-ignore
import { User, UserInfo } from '@firebase/auth-types';
import 'firebase/auth';
import 'firebase/firestore';
import { registerNewUser } from '../../api/users';
import { loginFormRules } from './loginForm';
import { signUpFormRules } from './signUpForm';
import validatorjs from 'validatorjs';

const plugins = { dvr: validatorjs };
export class AuthStore {
    public static getInstance() {
        if (!AuthStore.instance) {
            AuthStore.instance = new AuthStore();
        }
        return AuthStore.instance;
    }

    private static instance: AuthStore;

    public loginForm: MobxReactForm = null;
    public signUpForm: MobxReactForm = null;

    @observable
    public token: string = null;

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
        this.auth.onAuthStateChanged((user) => this.onAuthStateChanged(user));
        this.initForms();
    }

    public login(email: string, password: string) {
        this.userLoading = true;
        this.auth.signInWithEmailAndPassword(email, password).catch(({code, message}) => console.log(code, message));
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
            this.updateUserInfo(user.providerData[0]);
            user.getIdTokenResult()
                .then((idTokenResult) => {
                    console.log(idTokenResult);
                    const { token } = idTokenResult;
                    this.token = token;
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

    @action
    private updateUserInfo(newUserInfo: Partial<UserInfo>) {
        Object.assign(this.userInfo, newUserInfo);
    }

    private initForms() {
        this.loginForm = new MobxReactForm({ fields: loginFormRules }, {
            plugins, hooks: {
                onSuccess: (form) => {
                    const { email, password } = form.values();
                    this.login(email, password);
                },
            },
        });

        this.signUpForm = new MobxReactForm({ fields: signUpFormRules }, {
            plugins, hooks: {
                onSuccess: (form: MobxReactForm) => {
                    const { displayName, email, password } = form.values();
                    this.userLoading = true;
                    registerNewUser(email, password, displayName).then(() => {
                        this.userLoading = false;
                    });
                },
            },
        });
    }
}

export default AuthStore;
