import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'mobx-router';
import { IStores, AuthStore, IAppStore } from '../../../app/stores';
import { pages } from '../../../app';
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
    Form,
    FormGroup,
} from 'reactstrap';
import LoaderInCard from '../../components/Loader';

interface IProps {
    store: IAppStore;
    authStore: AuthStore;
}

@inject(({ store, authStore }: IStores) => ({ store, authStore }))
@observer
class Register extends React.Component<IProps> {
    public render() {
        const {store, authStore} = this.props;
        const {signUpForm: form} = authStore;

        return (
            authStore.isLoggedIn ? (
                <Card>
                    <CardBody className="p-4">
                        <CardTitle>
                            You're logged in!
                        </CardTitle>
                        <Row>
                            <Col>
                                <Link view={pages.overview} store={store} className="nav-link pl-0">
                                    Go To Overview
                                </Link>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            ) : (
                authStore.userLoading ? (
                    <LoaderInCard loading={authStore.userLoading} />
                ) : (
                    <div className="app flex-row align-items-center">
                        <Row className="justify-content-center">
                            <Col>
                                <Card>
                                    <CardBody className="p-4">
                                        <CardTitle>Register</CardTitle>
                                        <p className="text-muted">Create your account</p>
                                        <Form onSubmit={form.onSubmit}>
                                            <FormGroup>
                                                <InputGroup>
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="icon-user" />
                                                        </span>
                                                    </div>
                                                    <Input {...form.$('displayName').bind()} />
                                                </InputGroup>
                                                <small className="text-danger">{form.$('displayName').error}</small>
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup>
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">@</span>
                                                    </div>
                                                    <Input {...form.$('email').bind()} />
                                                </InputGroup>
                                                <small className="text-danger">{form.$('email').error}</small>
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup>
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="icon-lock" />
                                                        </span>
                                                    </div>
                                                    <Input {...form.$('password').bind()} />
                                                </InputGroup>
                                                <small className="text-danger">{form.$('password').error}</small>
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup>
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="icon-lock" />
                                                        </span>
                                                    </div>
                                                    <Input {...form.$('passwordConfirm').bind()} />
                                                </InputGroup>
                                                <small className="text-danger">{form.$('passwordConfirm').error}</small>
                                            </FormGroup>
                                            <Row className="justify-content-end mr-0 ml-0 mt-4">
                                                <Button color="success" type="submit">Create Account</Button>
                                            </Row>
                                        </Form>
                                    </CardBody>
                                    <CardFooter className="p-4">
                                        <Row>
                                            <Col xs="12" sm="6">
                                                <Button className="btn-facebook" block={true}>
                                                    <span>facebook</span>
                                                </Button>
                                            </Col>
                                            <Col xs="12" sm="6">
                                                <Button className="btn-twitter" block={true}>
                                                    <span>twitter</span>
                                                </Button>
                                            </Col>
                                        </Row>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                )
            )
        );
    }
}

export default Register;
