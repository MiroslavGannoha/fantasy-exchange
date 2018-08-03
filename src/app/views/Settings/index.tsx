import * as React from 'react';
import Profile from '../Profile';
import { inject, observer } from 'mobx-react';
import { IStores, AuthStore } from '../../../app/stores';

interface IProps {
    store?: any;
    authStore?: AuthStore;
}

interface IState {
    user: any;
}

@inject(({ authStore }: IStores) => ({ authStore }))
@observer
class Settings extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    public componentDidMount() {
        // const parent = window.parent; // eslint-disable-line no-restricted-globals
        // if (parent.setDemoFrameHeight) {
            // parent.setDemoFrameHeight();
        // }
    }

    public render() {
        return (
            <div className="row">
                <div className="col mb-3">
                    <div className="card">
                        <div className="card-body">
                            <Profile />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 mb-3">
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="px-xl-3">
                                <button className="btn btn-block btn-secondary" onClick={this.logout}>
                                    <i className="fa fa-sign-out"/>
                                    <span>Logout</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title font-weight-bold">Support</h6>
                            <p className="card-text">Get fast, free help from our friendly assistants.</p>
                            <button type="button" className="btn btn-primary">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private logout() {
        this.props.authStore.logout();
    }
}

export default Settings;
