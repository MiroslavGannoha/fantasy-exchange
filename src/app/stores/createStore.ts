import { TodoModel } from '../models';
import { TodoStore } from './TodoStore';
import { AppStore } from './AppStore';
import { AuthStore } from './AuthStore';
import { RouterStore } from 'mobx-router';

export enum Stores {
    APP = 'store',
    TODO = 'todo',
    AUTH = 'auth',
    ROUTER = 'router',
}

export function createStores(defaultTodos?: TodoModel[]) {
    const todoStore = new TodoStore(defaultTodos);
    const authStore = new AuthStore();
    const routerStore = new RouterStore();
    const appStore = {
        app: new AppStore(),
        router: routerStore,
    };

    return {
        [Stores.APP]: appStore,
        [Stores.TODO]: todoStore,
        [Stores.AUTH]: authStore,
        [Stores.ROUTER]: routerStore,
    };
}
