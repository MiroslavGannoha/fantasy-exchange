import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { IStores, AuthStore, IAppStore } from '../../../app/stores';
import EPanel from '../panel';
import { Link } from 'mobx-router';
import { pages } from '../../../app';
import { Form, InputGroup, FormGroup, Input } from 'reactstrap';

interface IProps {
    store?: IAppStore;
    authStore?: AuthStore;
    className?: string;
}

// @inject(({ store, authStore }: IStores) => ({ store, authStore }))
@observer
class LoginForm extends React.Component<IProps> {

    public render() {
        const Title = () => <div className="h5 text-center w-100 mb-2">Sign In</div>;
        const form = this.props.authStore.loginForm;
        return (
            <EPanel titleNode={<Title />} className={this.props.className}>
                {/* <Authenticator /> */}
                <Form onSubmit={form.onSubmit}>
                    <FormGroup>
                        <InputGroup>
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="icon-user" />
                                </span>
                            </div>
                            <Input {...form.$('username').bind()}/>
                        </InputGroup>
                        <small className="text-danger">{form.$('username').error}</small>
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
                    <div className="row form-group justify-content-between mr-0 ml-0">
                        <Link view={pages.signUp} store={this.props.store} className="nav-link pl-0">
                            No account? Register
                        </Link>
                        <button type="submit" className="btn btn-primary">Sign In</button>
                    </div>
                    <div className="form-group text-center m-0">
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline-secondary">
                                <i className="fa fa-fw fa-twitter" />
                            </button>
                            <button type="button" className="btn btn-outline-secondary">
                                <i className="fa fa-fw fa-facebook" />
                            </button>
                            <button type="button" className="btn btn-outline-secondary">
                                <i className="fa fa-fw fa-github" />
                            </button>
                        </div>
                    </div>
                    <p>{form.error}</p>
                </Form>
            </EPanel>
        );
    }
}

export default LoginForm;
