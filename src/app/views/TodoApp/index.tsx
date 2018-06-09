import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';
import { Header } from '../../components/Todo/Header';
import { TodoList } from '../../components/Todo/TodoList';
import { Footer } from '../../components/Todo/Footer';
import { TodoStore, Stores } from '../../stores';
import { TodoFilter } from '../../constants';
import * as style from './style.m.css';

export interface ITodoAppProps extends RouteComponentProps<any> {
    // MobX Stores will be injected via @inject()//
    // [STORE_ROUTER]: RouterStore;
    // [STOURE_TODO]: TodoStore;
}

export interface ITodoAppState {
    filter: TodoFilter;
}

@inject(Stores.TODO, Stores.APP)
@observer
export class TodoApp extends React.Component<ITodoAppProps, ITodoAppState> {
    constructor(props: ITodoAppProps, context: any) {
        super(props, context);
        this.state = { filter: TodoFilter.ALL };
    }

    public render() {
        const todoStore = this.props[Stores.TODO] as TodoStore;
        const { children } = this.props;
        const { filter } = this.state;
        const filteredTodos = this.getFilteredTodo(filter);

        const footer = todoStore.todos.length && (
            <Footer
                filter={filter}
                activeCount={todoStore.activeTodos.length}
                completedCount={todoStore.completedTodos.length}
                onClearCompleted={todoStore.clearCompleted}
                onChangeFilter={this.handleFilter}
            />
        );

        return (
            <div className={'animated fadeIn ' + style.todoappContainer}>
                <div className={style.normal}>
                    <Header addTodo={todoStore.addTodo} />
                    <TodoList
                        todos={filteredTodos}
                        completeAll={todoStore.completeAll}
                        deleteTodo={todoStore.deleteTodo}
                        editTodo={todoStore.editTodo}
                    />
                    {footer}
                    {children}
                </div>
            </div>
        );
    }
    // public componentWillMount() {
    //     this.checkLocationChange();
    // }

    // public componentWillReceiveProps(nextProps: ITodoAppProps, nextContext: any) {
    //     this.checkLocationChange();
    // }

    // private checkLocationChange() {
    //     const router = this.props[STORE_ROUTER] as RouterStore;
    //     const filter = Object.keys(TODO_FILTER_LOCATION_HASH)
    //         .map((key) => Number(key) as TodoFilter)
    //         .find(
    //             (filterItem) => TODO_FILTER_LOCATION_HASH[filterItem] === router.location.hash,
    //         );

    //     this.setState({ filter });
    // }

    private handleFilter = (filter: TodoFilter) => {
        // const router = this.props[STORE_ROUTER] as RouterStore;
        // const currentHash = router.location.hash;
        // const nextHash = TODO_FILTER_LOCATION_HASH[this.state.filter];
        // if (currentHash !== nextHash) {
            // router.replace(nextHash);
        // }
        this.setState({ filter });
    }

    private getFilteredTodo(filter: TodoFilter) {
        const todoStore = this.props[Stores.TODO] as TodoStore;
        switch (filter) {
            case TodoFilter.ACTIVE:
                return todoStore.activeTodos;
            case TodoFilter.COMPLETED:
                return todoStore.completedTodos;
            default:
                return todoStore.todos;
        }
    }
}
