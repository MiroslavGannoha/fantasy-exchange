import { TodoModel } from '../models';
import { TodoStore } from './TodoStore';
import { AppStore } from './AppStore';
import { AuthStore } from './AuthStore';
import { RouterStore } from 'mobx-router';

export enum Stores {
    APP = 'store',
    TODO = 'todo',
    AUTH = 'auth',
}

export function createStores(defaultTodos?: TodoModel[]) {
    const todoStore = new TodoStore(defaultTodos);
    const authStore = new AuthStore();
    const appStore = {
        app: new AppStore(),
        router: new RouterStore(),
        auth: new AuthStore(),
    };

    return {
        [Stores.APP]: appStore,
        [Stores.TODO]: todoStore,
        [Stores.AUTH]: authStore,
    };
}
