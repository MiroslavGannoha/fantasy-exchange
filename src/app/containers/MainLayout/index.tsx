import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Stores, AuthStore } from '../../stores';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/navbar';
import Login from '../../components/Login';

interface IMainLayoutProps {
    component: React.ComponentClass;
    role?: React.ComponentClass;
}

@inject(Stores.AUTH)
@observer
class MainLayout extends React.Component<IMainLayoutProps> {
    private authStore: AuthStore = this.props[Stores.AUTH];

    constructor(props) {
        super(props);
    }

    public render() {
        const { component: ChildComponent, role: RoleComponent } = this.props;
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
                        {!this.authStore.isLoggedIn && <Login className="mb-3" />}
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
