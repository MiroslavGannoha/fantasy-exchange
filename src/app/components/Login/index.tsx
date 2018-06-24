import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Stores, AuthStore, AppStore } from '../../../app/stores';
import EPanel from '../panel';
import { Link } from 'mobx-router';
import { pages } from '../../../app';
import { Form, InputGroup, FormGroup, Input } from 'reactstrap';
interface ILoginFormProps {
    className ?: string;
}

@inject(Stores.AUTH, Stores.APP)
@observer
class LoginForm extends React.Component<ILoginFormProps> {
    private authStore: AuthStore = this.props[Stores.AUTH];
    private appStore: AppStore = this.props[Stores.APP];

    public render() {
        const Title = () => <div className="h5 text-center w-100 mb-2">Sign In</div>;
        const form = this.authStore.loginForm;
        return (
            <EPanel titleNode={<Title />} className={this.props.className}>
                <Form onSubmit={form.onSubmit}>
                    <FormGroup>
                        <InputGroup>
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    @
                                </span>
                            </div>
                            <Input {...form.$('email').bind()}/>
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
                    <div className="row form-group justify-content-between mr-0 ml-0">
                        <Link view={pages.signUp} store={this.appStore} className="nav-link pl-0">
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
