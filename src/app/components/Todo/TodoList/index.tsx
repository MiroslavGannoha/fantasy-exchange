import * as React from 'react';
import { TodoItem, ITodoActions } from '../TodoItem';
import { TodoModel } from '../../../models/TodoModel';
import * as style from './style.m.css';

export interface ITodoListProps extends ITodoActions {
    todos: TodoModel[];
    completeAll: () => any;
}

export class TodoList extends React.Component<ITodoListProps, {}> {
    constructor(props?: ITodoListProps, context?: any) {
        super(props, context);
    }

    public render() {
        const { todos, ...actions } = this.props;
        const todoItems = todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} {...actions} />
        ));

        return (
            <section className={style.main}>
                {this.renderToggleAll()}
                <ul className={style.normal}>
                    {todoItems}
                </ul>
            </section>
        );
    }

    private handleToggleAll = (e: React.SyntheticEvent<any>) => {
        e.preventDefault();
        this.props.completeAll();
    }

    private renderToggleAll() {
        const { todos } = this.props;
        const completedCount = todos.length;
        if (todos.length > 0) {
            return (
                <input
                    className={style.toggleAll}
                    type="checkbox"
                    checked={completedCount === todos.length}
                    onChange={this.handleToggleAll}
                />
            );
        }
    }
}

export default TodoList;
