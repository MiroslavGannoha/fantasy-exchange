import * as React from 'react';
import { Row, Progress, Col, Card, CardBody, CardTitle } from 'reactstrap';

interface ILoaderProps {
    loading?: boolean;
    size?: number;
    message?: string;
}

class Loader extends React.Component<ILoaderProps> {
    public render() {
        const { loading, size, message } = this.props;
        let show;
        console.log('loading', loading);
        loading === undefined ? show = true : show = loading;
        return show ? (
            <Row className="justify-content-center mb-3">
                <Col md={size || 12}>
                    <Card className="text-center">
                        <CardBody className="p-4">
                            <CardTitle>
                                {message || 'Loading...'}
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
