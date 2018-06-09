import * as React from 'react';
import * as classNames from 'classnames';

import './metric.css';

interface IEMetricProps {
    title?: string;
    value?: string;
    icon?: string;
    iconDark?: boolean;
    className?: string;
}

class EMetric extends React.Component<IEMetricProps, {}> {
    public render() {
        const {
            className,
            title, value, icon, iconDark,
            ...attributes,
        } = this.props;

        const metricClass = classNames(
            { 'e-metric card': true },
            className,
        );

        return (
            <div className={metricClass} {...attributes}>
                <div className="card-body">
                    <div className="e-metric__main">
                        <span className="e-metric__ico fa-stack">
                            <i className={classNames('fa fa-circle fa-stack-2x', { 'text-light': !iconDark })}/>
                            <i className={classNames('fa fa-stack-1x', this.props.icon, { 'fa-inverse': iconDark })}/>
                        </span>
                        <div className="e-metric__text px-2">
                            <span className="e-metric__value h5 m-0">{String(this.props.value || 0)}</span>
                            <div className="e-metric__title">
                                <small className="text-muted">{this.props.title || 'Metric'}</small>
                            </div>
                        </div>
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default EMetric;
