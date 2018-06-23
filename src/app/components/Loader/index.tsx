import * as React from 'react';
import { Row, Progress, Col, Card, CardBody, CardTitle } from 'reactstrap';

interface ILoaderProps {
    loading: boolean;
}

class Loader extends React.Component<ILoaderProps> {
    public render() {
        return this.props.loading ? (
            <Row className="justify-content-center">
                <Col md="8">
                    <Card className="text-center">
                        <CardBody className="p-4">
                            <CardTitle>
                                Loading...
                            </CardTitle>
                            <Progress animated={true} value="100" color="success" />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        ) : null;
    }
}

export default Loader;
