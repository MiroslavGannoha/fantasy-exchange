import * as React from 'react';
import * as classNames from 'classnames';
import * as style from './style.m.css';

import {
    TODO_FILTER_TITLES,
    TODO_FILTER_TYPES,
    TodoFilter,
} from '../../../constants';

export interface IFooterProps {
    filter: TodoFilter;
    activeCount: number;
    completedCount: number;
    onChangeFilter: (filter: TodoFilter) => any;
    onClearCompleted: () => any;
}

export class Footer extends React.Component<IFooterProps, {}> {
    public render() {
        const items = TODO_FILTER_TYPES.map((filter) => (
            <li key={filter} children={this.renderFilterLink(filter)} />
        ));
        return (
            <footer className={style.normal}>
                {this.renderTodoCount()}
                <ul className={style.filters}>
                    {items}
                </ul>
                {this.renderClearButton()}
            </footer>
        );
    }

    private renderTodoCount() {
        const { activeCount } = this.props;
        const itemWord = activeCount === 1 ? 'item' : 'items';

        return (
            <span className={style.count}>
                <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
        );
    }

    private renderFilterLink(filter: TodoFilter) {
        const title = TODO_FILTER_TITLES[filter];
        const { filter: selectedFilter, onChangeFilter } = this.props;
        const className = classNames({
            [style.selected]: filter === selectedFilter,
        });

        function onClickHandler() {
            onChangeFilter(filter);
        }

        return (
            <a
                className={className}
                style={{ cursor: 'pointer' }}
                onClick={onClickHandler}
            >
                {title}
            </a>
        );
    }

    private renderClearButton() {
        const { completedCount, onClearCompleted } = this.props;
        if (completedCount > 0) {
            return <button className={style.clearCompleted} onClick={onClearCompleted} />;
        }
    }

}

export default Footer;
