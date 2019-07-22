import * as React from 'react';
// import { inject, observer } from 'mobx-react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/navbar';
// import Login from '../../components/Login';
// import LoaderInCard from '../../components/Loader';

class MainLayout extends React.Component<any> {
    public render() {
        const { children } = this.props;
        return (
            <Container fluid={true}>
                <Row>
                    <Col>
                        <Navbar />
                        <Breadcrumb>
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
                        {/* <LoaderInCard loading={authStore.userLoading} message="Logging in ..." /> */}
                        {/* {!authStore.isLoggedIn && !authStore.userLoading ? <Login className="mb-3" /> : null} */}
                        <Sidebar />
                    </Col>
                    <Col md="9" >
                        {children}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MainLayout;
