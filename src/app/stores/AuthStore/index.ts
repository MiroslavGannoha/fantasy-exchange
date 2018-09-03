import { computed, observable, action } from 'mobx';
import MobxReactForm from 'mobx-react-form';
import * as moment from 'moment';
// @ts-ignore
import firebase from 'firebase/app';
// @ts-ignore
import { User, UserInfo, FirebaseAuth } from '@firebase/auth-types';
import { FirebaseFirestore } from '@firebase/firestore-types';
import 'firebase/auth';
import 'firebase/firestore';
import { usersApi } from '../../api';
import { loginFormRules } from './loginForm';
import { signUpFormRules } from './signUpForm';
import validatorjs from 'validatorjs';
import { toast } from '../../../../node_modules/react-toastify';

const db: FirebaseFirestore = firebase.firestore();
const auth: FirebaseAuth = firebase.auth();

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
    @observable private currentPersona: any = null;

    constructor() {
        this.auth = firebase.auth();
        this.auth.onAuthStateChanged((user) => this.onAuthStateChanged(user));
        this.initForms();
    }

    public login(email: string, password: string) {
        this.userLoading = true;
        this.auth.signInWithEmailAndPassword(email, password).catch(({code, message}) => {
            toast.error(code + ' ' + message);
            this.userLoading = false;
        });
    }

    @action
    public logout() {
        this.auth.signOut();
    }

    @computed
    public get userName(): string {
        return this.currentPersona ? this.currentPersona.displayName : '';
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
            console.log('onauthstatechange SIGN IN', user);
            this.currentUser = user;
            db.collection('personas').doc(user.uid).onSnapshot(
                (doc) => this.currentPersona = doc.data(),
            );
            this.updateUserInfo(user.providerData[0]);
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
                    usersApi.registerNewUser(email, password, displayName).then(() => {
                        auth.signInWithEmailAndPassword(email, password).catch(({ code, message }) => {
                            toast.error(code + ' ' + message);
                            this.userLoading = false;
                        });
                    }).catch(() => {
                        this.userLoading = false;
                    });
                },
            },
        });
    }
}

export default AuthStore;
