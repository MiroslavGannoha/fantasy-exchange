import { AppStore } from './AppStore';
import { AuthStore } from './AuthStore';
import { UsersStore } from './UsersStore';
import { RouterStore } from 'mobx-router';
import { PlayersStore } from './PlayersStore';
import { RightsStore } from './RightsStore';
import { MarketStore } from './MarketStore';

export interface IAppStore {
    app: AppStore;
    router: RouterStore;
}

export interface IStores {
    authStore: AuthStore;
    store: IAppStore;
    usersStore: UsersStore;
    playersStore: PlayersStore;
    rightsStore: RightsStore;
    marketStore: MarketStore;
}

export interface ICRUDClassStore extends UsersStore, PlayersStore { }

export function createStores() {

    const stores: IStores = {
        store: {
            app: new AppStore(),
            router: new RouterStore(),
        },
        authStore: AuthStore.getInstance(),
        usersStore: new UsersStore(),
        playersStore: new PlayersStore(),
        rightsStore: new RightsStore(),
        marketStore: new MarketStore(),
    };

    return stores;
}
