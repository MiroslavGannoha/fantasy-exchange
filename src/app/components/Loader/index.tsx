import * as React from 'react';
import { Row, Progress, Col, Card, CardBody, CardTitle, Container } from 'reactstrap';

interface ILoaderProps {
    loading?: boolean;
    size?: number;
    message?: string;
}

export const Loader = () => (
    <Progress animated={true} value="100" color="success" className="m-3" />
);

class LoaderInCard extends React.Component<ILoaderProps> {
    public render() {
        const { loading, size, message } = this.props;
        let show;
        loading === undefined ? show = true : show = loading;
        return show ? (
            <Row className="justify-content-center mb-3">
                <Col md={size || 12}>
                    <Card className="text-center">
                        <CardBody className="p-4">
                            <CardTitle>
                                {message || 'Loading...'}
                            </CardTitle>
                            <Loader />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        ) : null;
    }
}

export const LoaderFullscreen = (props: ILoaderProps) => (
    <div className="app flex-row align-items-center">
        <Container>
            <Row className="justify-content-center">
                <Col md="6">
                    <Loader />
                </Col>
            </Row>
        </Container>
    </div>
);

export default LoaderInCard;
