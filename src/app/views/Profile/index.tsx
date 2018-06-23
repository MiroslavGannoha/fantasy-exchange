import * as React from 'react';
import * as classNames from 'classnames';
import { inject, observer } from 'mobx-react';
import { Stores, AuthStore } from '../../../app/stores';
import { TabContent, TabPane, Nav, NavItem } from 'reactstrap';
import { Link } from 'mobx-router';
import ProfileSettingsForm from './ProfileSettingsForm';
import { pages } from '../../../app';
import dotaLogo from '../../../../img/dota2-logo.png';

interface IProfileProps {
    store?: any;
}

interface IProfileState {
    tab: any;
}

@inject(Stores.APP, Stores.AUTH)
@observer
class Profile extends React.Component<IProfileProps, IProfileState> {
    private authStore: AuthStore = this.props[Stores.AUTH];

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
                            <img src={dotaLogo} alt="logo" width="140px" />
                        </div>
                    </div>
                    <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                        <div className="text-center text-sm-left mb-2 mb-sm-0">
                            <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">{this.authStore.userName}</h4>
                            <p className="mb-0">{this.authStore.userInfo.email}</p>
                            <div className="text-muted">
                                <small>Last seen {this.authStore.lastVisit}</small>
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
                                <small>
                                    Joined {this.authStore.userCreated}
                                </small>
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
                        <ProfileSettingsForm />
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default Profile;
