import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { IStores, AuthStore } from '../../stores';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/navbar';
import Login from '../../components/Login';
import Loader from '../../components/Loader';

interface IMainLayoutProps {
    component: React.ComponentClass;
    role?: React.ComponentClass;
    authStore?: AuthStore;
}

@inject(({ authStore }: IStores) => ({ authStore }))
@observer
class MainLayout extends React.Component<IMainLayoutProps> {

    constructor(props) {
        super(props);
    }

    public render() {
        const { component: ChildComponent, role: RoleComponent, authStore } = this.props;
        let Component;
        if (RoleComponent) {
            Component = (
                <RoleComponent>
                    <ChildComponent />
                </RoleComponent>
            );
        } else {
            Component = <ChildComponent />;
        }

        return (
            <Container fluid={true}>
                <Row>
                    <Col>
                        <Navbar />
                        <Breadcrumb className="bg-white">
                            <BreadcrumbItem>
                                Main
                            </BreadcrumbItem>
                            <BreadcrumbItem active={true}>
                                Profile
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row className="flex-lg-nowrap">
                    <Col md="3" className="mb-3">
                        <Loader loading={authStore.userLoading} message="Logging in ..." />
                        {!authStore.isLoggedIn && !authStore.userLoading ? <Login className="mb-3" /> : null}
                        <Sidebar />
                    </Col>
                    <Col md="9" >
                        {Component}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MainLayout;
