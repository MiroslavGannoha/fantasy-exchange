import * as React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';

interface IMainLayoutProps {
    component: any;
    path?: string;
    exact?: boolean;
}

const AuthLayout: React.SFC<IMainLayoutProps> = (props) => {
    const { component: Component, ...rest } = props;
    function renderContent(matchProps) {
        return (
            <div className="app">
                <Container fluid={true}>
                    <Component {...matchProps} />
                </Container>
            </div>
        );
    }
    return <Route {...rest} render={renderContent} />;
};

export default AuthLayout;
