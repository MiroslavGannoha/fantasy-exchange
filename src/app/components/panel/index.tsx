import * as React from 'react';
import * as classNames from 'classnames';

import './panel.css';

interface IEPanelProps {
    title?: string;
    subtitle?: string;
    noHead?: boolean;
    headNode?: any;
    titleNode?: any;
    subtitleNode?: any;
    actionsNode?: any;
    className?: string;
}

class EPanel extends React.Component<IEPanelProps, {}> {
    public render() {
        const {
            className,
            title, subtitle, noHead,
            headNode, titleNode, subtitleNode, actionsNode,
            ...attributes
        } = this.props;

        const panelClass = classNames(
            { 'e-panel card': true },
            className,
        );

        const Subtitle = this.props.subtitleNode ? this.props.subtitleNode : (
            <small className="px-1">{this.props.subtitle}</small>
        );

        const Title = this.props.titleNode ? this.props.titleNode : (
            <h6 className="mr-2">
                <span>{this.props.title}</span>
                {Subtitle}
            </h6>
        );

        const Head = this.props.headNode ? this.props.headNode : (
            <div className="card-title">
                {Title}
                {this.props.actionsNode}
            </div>
        );

        return (
            <div className={panelClass} {...attributes}>
                <div className="card-body">
                    {!this.props.noHead && Head}
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default EPanel;
