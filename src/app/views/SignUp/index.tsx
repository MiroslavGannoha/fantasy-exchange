import * as React from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    Button,
    Input,
    InputGroup,
    CardTitle,
} from 'reactstrap';

class Register extends React.Component {
    public render() {
        return (
            <div className="app flex-row align-items-center">
                <Row className="justify-content-center">
                    <Col>
                        <Card>
                            <CardBody className="p-4">
                                <CardTitle>Register</CardTitle>
                                <p className="text-muted">Create your account</p>
                                <InputGroup className="mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="icon-user" />
                                        </span>
                                    </div>
                                    <Input type="text" placeholder="Username" />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">@</span>
                                    </div>
                                    <Input type="text" placeholder="Email" />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="icon-lock" />
                                        </span>
                                    </div>
                                    <Input type="password" placeholder="Password" />
                                </InputGroup>
                                <InputGroup className="mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="icon-lock" />
                                        </span>
                                    </div>
                                    <Input type="password" placeholder="Repeat password" />
                                </InputGroup>
                                <Row className="justify-content-end mr-0 ml-0">
                                    <Button color="success" >Create Account</Button>
                                </Row>
                            </CardBody>
                            <CardFooter className="p-4">
                                <Row>
                                    <Col xs="12" sm="6">
                                        <Button className="btn-facebook" block={true}><span>facebook</span></Button>
                                    </Col>
                                    <Col xs="12" sm="6">
                                        <Button className="btn-twitter" block={true}><span>twitter</span></Button>
                                    </Col>
                                </Row>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Register;
