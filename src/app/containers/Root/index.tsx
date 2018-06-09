import * as React from 'react';

export class Root extends React.Component<any, any> {
    public render() {
        return (
            <div>
                {this.props.children}
                {this.renderDevTool()}
            </div>
        );
    }

    private renderDevTool() {
        if (process.env.NODE_ENV !== 'production') {
            const DevTools = require('mobx-react-devtools').default;
            return <DevTools />;
        }
    }

}
