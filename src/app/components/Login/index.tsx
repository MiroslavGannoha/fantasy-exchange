import * as React from 'react';
import EPanel from '../panel';

interface ILoginFormProps {
    className ?: string;
}

class LoginForm extends React.Component<ILoginFormProps, {}> {
    public render() {
        const Title = () => (
            <div className="h6 text-center w-100 mb-2">Sign In</div>
        );

        return (
            <EPanel titleNode={<Title />} className={this.props.className}>
                <form>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group d-flex justify-content-between align-items-center">
                        <a href="" className="text-muted btn btn-link">
                            Need Help?
                        </a>
                        <button type="submit" className="btn btn-primary">Submit</button>
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
                </form>
            </EPanel>
        );
    }
}

export default LoginForm;
