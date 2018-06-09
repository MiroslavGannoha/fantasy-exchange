import * as React from 'react';
import * as classNames from 'classnames';

import './tabs.css';

interface IETabsProps {
    nested?: boolean;
    className?: string;
}

class ETabs extends React.Component<IETabsProps, {}> {
    public render() {
        const { className, nested, ...attributes } = this.props;
        const tabsClass = classNames(
            { 'e-tabs': true },
            { 'e-tabs--nested': this.props.nested },
            className,
        );

        return (
            <div className={tabsClass} {...attributes}>{this.props.children}</div>
        );
    }
}

export default ETabs;
