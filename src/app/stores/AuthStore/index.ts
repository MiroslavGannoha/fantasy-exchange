import { computed, observable, action } from 'mobx';
import MobxReactForm from 'mobx-react-form';
import * as moment from 'moment';
import { loginFormRules } from './loginForm';
import { signUpFormRules } from './signUpForm';
import validatorjs from 'validatorjs';
import { Auth } from 'aws-amplify';

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

    @observable public currentUser: any = null;

    @observable
    public auth: any = null;

    @observable
    public userLoading: boolean = false;

    constructor() {
        this.initForms();
        Auth.currentAuthenticatedUser().then(this.setCurrentUser);
    }

    public login(username: string, password: string) {
        this.userLoading = true;
        Auth.signIn(username, password)
            .then((user) => {
                this.userLoading = false;
                this.setCurrentUser(user);
            })
            .catch((error) => {
                this.userLoading = false;
                console.log('error', error);
            });
    }

    @action
    public setCurrentUser = (user) => {
        console.log('current user:', user);
        this.currentUser = user;
    }

    @action
    public logout() {
        this.auth.signOut();
    }

    @computed
    public get userName(): string {
        return this.currentUser ? this.currentUser.username : '';
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

    // @computed
    // public get lastVisit() {
    //     if (!this.currentUser) {
    //         return '';
    //     }
    //     return moment(this.currentUser.metadata.lastSignInTime).fromNow();
    // }

    private initForms() {
        this.loginForm = new MobxReactForm({ fields: loginFormRules }, {
            plugins, hooks: {
                onSuccess: (form) => {
                    const { username, password } = form.values();
                    this.login(username, password);
                },
            },
        });

        this.signUpForm = new MobxReactForm({ fields: signUpFormRules }, {
            plugins, hooks: {
                onSuccess: (form: MobxReactForm) => {
                    const { username, email, password } = form.values();
                    Auth.signUp({
                        username,
                        password,
                        attributes: {
                            email,          // optional
                        },
                    })
                        .then((data) => console.log(data))
                        .catch((err) => console.log(err));
                    // this.userLoading = true;
                },
            },
        });
    }
}

export default AuthStore;
