import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Stores, AuthStore } from '../../../app/stores';
import EPanel from '../panel';

interface ILoginFormProps {
    className ?: string;
}

@inject(Stores.AUTH)
@observer
class LoginForm extends React.Component<ILoginFormProps> {
    private authStore: AuthStore = this.props[Stores.AUTH];

    public render() {
        const Title = () => <div className="h6 text-center w-100 mb-2">Sign In</div>;
        const form = this.authStore.loginForm;
        return (
            <EPanel titleNode={<Title />} className={this.props.className}>
                <form onSubmit={form.onSubmit}>
                    <div className="form-group">
                        <input className="form-control" {...form.$('email').bind()} />
                        <small className="text-danger">{form.$('email').error}</small>
                    </div>
                    <div className="form-group">
                        <input className="form-control" {...form.$('password').bind()} />
                        <small className="text-danger">{form.$('password').error}</small>
                    </div>
                    <div className="form-group d-flex justify-content-between align-items-center">
                        <a href="" className="text-muted btn btn-link">
                            Need Help?
                        </a>
                        <button type="submit" className="btn btn-primary" onClick={form.onSubmit}>Submit</button>
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
                </form>
            </EPanel>
        );
    }
}

export default LoginForm;
