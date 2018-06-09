import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Stores, AppStore } from '../../../app/stores';
import { pages } from '../../../app';
import { Link } from 'mobx-router';
import ENavbar from './ENavbar';

@inject(Stores.APP)
@observer
class Navbar extends React.Component {
    private appStore: AppStore = this.props[Stores.APP];
    public render() {
        const Brand = () => (
            <Link className="e-logo mx-4" view={pages.settings} store={this.appStore} >
                <span>Elements <small>stay simple</small></span>
            </Link>
        );
        const CollapseNav = () => (
            <ul className="navbar-nav pt-3 pt-md-0">
                <li className="nav-item">
                    <Link className="nav-link" view={pages.overview} store={this.appStore} >Overview</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" view={pages.users} store={this.appStore}>CRUD</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" view={pages.settings} store={this.appStore}>Settings</Link>
                </li>
            </ul>
        );
        const Actions = () => (
            <div>
                <Link view={pages.settings} store={this.appStore} className="btn btn-success d-md-none">
                    <i className="fa fa-user-circle" />
                </Link>
                <div className="btn-group d-none d-md-block">
                    <button className="btn btn-success">
                        <i className="fa fa-bell" />
                    </button>
                    <Link view={pages.settings} store={this.appStore} className="btn btn-success">
                        <span className="mx-1">John Smith</span>
                    </Link>
                </div>
            </div>
        );

        return (
            <ENavbar
                className="my-3 px-lg-4"
                title="Overview"
                brandNode={<Brand />}
                collapseNode={<CollapseNav />}
                actionsNode={<Actions />}
            />
        );
    }
}

export default Navbar;
