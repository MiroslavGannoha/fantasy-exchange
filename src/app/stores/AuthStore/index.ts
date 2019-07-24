import { computed, observable, action, when } from 'mobx';
// import * as moment from 'moment';
import createAuth0Client from '@auth0/auth0-spa-js';
import { createHttpClient } from 'mst-gql';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import { GraphQLClient } from 'graphql-request';

const apiUrl = 'https://fantasy-exchange-api.herokuapp.com/v1/graphql';

class AuthStore {
    public static getInstance() {
        if (!AuthStore.instance) {
            AuthStore.instance = new AuthStore();
        }
        return AuthStore.instance;
    }

    private static instance: AuthStore;

    @observable public currentUser = null;

    public authClient: Auth0Client = null;

    @observable
    public httpClient: GraphQLClient = null;

    @observable
    public isAuthed: boolean = false;
    @observable
    public loading: boolean = false;

    constructor() {
        when(
            () => this.isAuthed,
            () => {
                this.authClient.getTokenSilently()
                    .then((token) => {
                        const headers = { authorization: `Bearer ${token}` };
                        this.httpClient = createHttpClient(apiUrl, { headers });
                    });

            },
        );
        // Auth.currentAuthenticatedUser().then(this.setCognitoUser);
        // Auth.currentUserInfo().then(this.setCurrentUser);
    }
    public async createAuthClient(initOptions) {
        this.loading = true;
        this.authClient = await createAuth0Client(initOptions);
        this.isAuthed = await this.authClient.isAuthenticated();
        // if (!this.isAuthed) {
        //     this.authClient.loginWithRedirect();
        // }
        this.loading = false;
        return this.authClient;
    }

    @action
    public setCurrentUser = (userInfo) => {
        this.currentUser = userInfo;
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
}

export const authStore = AuthStore.getInstance();

// @ts-ignore
window.authStore = authStore;

export default AuthStore;
