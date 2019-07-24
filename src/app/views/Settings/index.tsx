import * as React from 'react';
import Profile from '../Profile';
import { observer } from 'mobx-react';
import { authStore } from '../../../app/stores';

const Settings = observer(() => (
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
                        <button className="btn btn-block btn-secondary" onClick={authStore.logout}>
                            <i className="fa fa-sign-out" />
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
));

export default Settings;
