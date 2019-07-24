import * as React from 'react';
import { observer } from 'mobx-react';
import { useAuth0 } from 'app/components/AuthWrapper';

const ProfileSettingsForm = observer(() => {
    const { user } = useAuth0();

    const password = (
        <div className="row">
            <div className="col">
                <div className="form-group">
                    <label>Current Password</label>
                    <input className="form-control" type="password" placeholder="••••••" />
                </div>
            </div>
        </div>
    );

    return (
        <form
            className="form"
            // onSubmit={this.handleSubmit}
            noValidate
        >
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    value={user.nickname}
                                    placeholder={'Name'}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="username"
                                    value={user.name}
                                    placeholder={'Username'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder={'user@example.com'}
                                    value={user.name}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-3">
                            <div className="form-group">
                                <label>About</label>
                                <textarea
                                    className="form-control"
                                    // rows="5"
                                    placeholder="My Bio"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6 mb-3">
                    <div className="mb-2">
                        <b>Change Password</b>
                    </div>
                    {password}
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>New Password</label>
                                <input className="form-control" type="password" placeholder="••••••" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>Confirm <span className="d-none d-xl-inline">Password</span></label>
                                <input className="form-control" type="password" placeholder="••••••" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-5 offset-sm-1 mb-3">
                    <div className="mb-2">
                        <b>Keeping in Touch</b>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Email Notifications</label>
                            <div className="custom-controls-stacked px-2">
                                <div className="custom-control custom-checkbox">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        defaultChecked={true}
                                        id="notifications-blog"
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="notifications-blog"
                                    >
                                        Blog posts
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        defaultChecked={true}
                                        id="notifications-news"
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="notifications-news"
                                    >
                                        Newsletter
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        defaultChecked={true}
                                        id="notifications-offers"
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="notifications-offers"
                                    >
                                        Personal Offers
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-end">
                    <button className="btn btn-primary" type="submit">Save Changes</button>
                </div>
            </div>
        </form>
    );
});

export default ProfileSettingsForm;
