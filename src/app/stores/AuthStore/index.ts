import { computed, observable, action } from 'mobx';
import MobxReactForm from 'mobx-react-form';
// import * as moment from 'moment';
import { loginFormRules } from './loginForm';
import { signUpFormRules } from './signUpForm';
import validatorjs from 'validatorjs';

const plugins = { dvr: validatorjs };
class AuthStore {
    public static getInstance() {
        if (!AuthStore.instance) {
            AuthStore.instance = new AuthStore();
        }
        return AuthStore.instance;
    }

    private static instance: AuthStore;

    public loginForm: MobxReactForm = null;
    public signUpForm: MobxReactForm = null;

    @observable public cognitoUser: CognitoUser = null;
    @observable public currentUser = null;

    @observable
    public auth: any = null;

    @observable
    public userLoading: boolean = false;

    constructor() {
        this.initForms();
        // Auth.currentAuthenticatedUser().then(this.setCognitoUser);
        // Auth.currentUserInfo().then(this.setCurrentUser);
    }

    public login(username: string, password: string) {
        this.userLoading = true;
        // Auth.signIn(username, password)
        //     .then((cognitoUser) => {
        //         this.setCognitoUser(cognitoUser);
        //         return Auth.currentUserInfo().then(this.setCurrentUser);
        //     })
        //     .then((userInfo) => {
        //         this.setCurrentUser(userInfo);
        //         this.userLoading = false;
        //     })
        //     .catch((error) => {
        //         this.userLoading = false;
        //         console.log('error', error);
        //     });
    }

    @action
    public setCurrentUser = (userInfo) => {
        this.currentUser = userInfo;
    }

    @action
    public setCognitoUser = (cognitoUser) => {
        this.cognitoUser = cognitoUser;
    }

    @action
    public logout() {
        this.cognitoUser.signOut();
        this.cognitoUser = null;
        this.currentUser = null;
    }

    @computed
    public get userAttributes(): any {
        return this.currentUser ? this.currentUser.attributes : '';
    }

    @computed
    public get userName(): string {
        return this.currentUser ? this.currentUser.username : '';
    }

    @computed
    public get isLoggedIn(): boolean {
        return !!this.cognitoUser;
    }

    // @computed
    // public get userCreated() {
    //     if (!this.currentUser) {
    //         return '';
    //     }
    //     return moment(this.currentUser.metadata.creationTime).format('DD MMM YYYY');
    // }

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
