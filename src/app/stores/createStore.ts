import { TodoModel } from '../models';
import { TodoStore } from './TodoStore';
import { AppStore } from './AppStore';
import { RouterStore } from 'mobx-router';

export enum Stores {
    APP = 'store',
    TODO = 'todo',
}

export function createStores(defaultTodos?: TodoModel[]) {
    const todoStore = new TodoStore(defaultTodos);
    const appStore = {
        app: new AppStore(),
        router: new RouterStore(),
    };

    return {
        [Stores.APP]: appStore,
        [Stores.TODO]: todoStore,
    };
}
