import * as React from 'react';
import * as classNames from 'classnames';

import './navlist.css';

interface INavListProps {
    activeBold?: boolean;
    activeBg?: boolean;
    className?: string;
}

class ENavlist extends React.Component<INavListProps, {}> {
    public render() {
        const { className, activeBg, activeBold, ...attributes } = this.props;
        const navlistClass = classNames(
            { 'e-navlist': true },
            { 'e-navlist--active-bg': this.props.activeBg },
            { 'e-navlist--active-bold': this.props.activeBold },
            className,
        );

        return (
            <div className={navlistClass} {...attributes}>{this.props.children}</div>
        );
    }
}

export default ENavlist;
