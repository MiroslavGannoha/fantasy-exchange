import { AppStore } from './AppStore';
import { AuthStore } from './AuthStore';
import { UsersStore } from './UsersStore';
import { RouterStore } from 'mobx-router';

export interface IAppStore {
    app: AppStore;
    router: RouterStore;
}

export interface IStores {
    authStore: AuthStore;
    store: IAppStore;
    usersStore: UsersStore;
}

export function createStores() {

    const stores: IStores = {
        store: {
            app: new AppStore(),
            router: new RouterStore(),
        },
        authStore: AuthStore.getInstance(),
        usersStore: new UsersStore(),
    };

    return stores;
}
