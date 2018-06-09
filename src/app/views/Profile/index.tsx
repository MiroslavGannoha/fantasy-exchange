import * as React from 'react';
import * as classNames from 'classnames';
import * as Moment from 'moment';
import { Stores } from '../../../app/stores';
import { TabContent, TabPane, Nav, NavItem } from 'reactstrap';
import { Link } from 'mobx-router';
import ProfileSettingsForm from './ProfileSettingsForm';
import { pages } from '../../../app';
import { inject, observer } from 'mobx-react';

interface IProfileProps {
    user: any;
    store?: any;
}

interface IProfileState {
    tab: any;
}

@inject(Stores.APP)
@observer
class Profile extends React.Component<IProfileProps, IProfileState> {
    constructor(props) {
        super(props);

        this.state = {
            tab: 'settings',
        };
    }

    public openTab(tab) {
        if (tab) {
            this.setState({ tab });
        }
    }

    public render() {
        const onLinkClick = (e) => { e.preventDefault(); this.openTab('settings'); };
        return (
            <div className="e-profile">
                <div className="row">
                    <div className="col-12 col-sm-auto mb-3">
                        <div className="mx-auto" style={{ width: '140px' }}>
                            <div
                                className="d-flex justify-content-center align-items-center rounded"
                                style={{ height: '140px', backgroundColor: '#e9ecef' }}
                            >
                                <span style={{ color: '#a6a8aa', font: 'bold 8pt Arial' }}>
                                    {'140x140'}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                        <div className="text-center text-sm-left mb-2 mb-sm-0">
                            <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">{this.props.user.name}</h4>
                            <p className="mb-0">@{this.props.user.username}</p>
                            <div className="text-muted">
                                <small>Last seen 2 hours ago</small>
                            </div>
                            <div className="mt-2">
                                <button className="btn btn-primary" type="button">
                                    <i className="fa fa-fw fa-camera"/>
                                    <span>Change Photo</span>
                                </button>
                            </div>
                        </div>
                        <div className="text-center text-sm-right">
                            <span className="badge badge-secondary">administrator</span>
                            <div className="text-muted">
                                <small>Joined {Moment.unix(this.props.user.date).format('DD MMM YYYY')}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <Nav tabs>
                    <NavItem>
                        <Link
                            className={classNames({ 'active': this.state.tab === 'settings', 'nav-link': true })}
                            onClick={onLinkClick}
                            store={this.props[Stores.APP]}
                            view={pages.settings}
                            href=""
                        >
                            Settings
                        </Link>
                    </NavItem>
                </Nav>
                <TabContent className="pt-3" activeTab={this.state.tab}>
                    <TabPane tabId="settings">
                        <ProfileSettingsForm
                            data={this.props.user}
                        />
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default Profile;
