import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Page404 = () => (
    <Container>
        <Row className="justify-content-center">
            <Col md="6">
                <div className="clearfix">
                    <h1 className="float-left display-3 mr-4">404</h1>
                    <h4 className="pt-3">
                        Oops you're lost
                    </h4>
                    <p className="text-muted float-left">
                        Page  wasn't found
                    </p>
                </div>
            </Col>
        </Row>
    </Container>
);

export default Page404;
