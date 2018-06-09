import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/navbar';

interface IMainLayoutProps {
    component: any;
}

class MainLayout extends React.Component<IMainLayoutProps> {
    constructor(props) {
        super(props);
    }

    public render() {
        const { component: Component } = this.props;
        return (
            <Container fluid={true}>
                <Row>
                    <Col>
                        <Navbar />
                    </Col>
                </Row>
                <Row className="flex-lg-nowrap">
                    <Col md="3" className="mb-3">
                        <Sidebar />
                    </Col>
                    <Col md="9" >
                        <Component />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MainLayout;
