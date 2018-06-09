import * as React from 'react';
import { TodoTextInput } from '../TodoTextInput';
import { TodoModel } from '../../../models/TodoModel';

export interface IHeaderProps {
    addTodo: (todo: Partial<TodoModel>) => any;
}

export class Header extends React.Component<IHeaderProps, {}> {
    public render() {
        return (
            <header>
                <h1>Todos</h1>
                <TodoTextInput
                    newTodo={true}
                    onSave={this.handleSave}
                    placeholder="What needs to be done?"
                />
            </header>
        );
    }
    private handleSave = (text: string) => {
        if (text.length) {
            this.props.addTodo({ text });
        }
    }
}

export default Header;
