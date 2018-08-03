import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { IStores, IAppStore, AuthStore } from '../../../app/stores';
import { pages } from '../../../app';
import { Link } from 'mobx-router';
import ENavbar from './ENavbar';

interface IProps {
    store?: IAppStore;
    authStore?: AuthStore;
}

@inject(({ store, authStore}: IStores) => ({store, authStore}))
@observer
class Navbar extends React.Component<IProps> {
    public render() {
        const {store, authStore} = this.props;
        const Brand = () => (
            <Link className="e-logo mx-4" view={pages.settings} store={store} >
                <span>Elements <small>stay simple</small></span>
            </Link>
        );
        const CollapseNav = () => (
            <ul className="navbar-nav pt-3 pt-md-0">
                <li className="nav-item">
                    <Link className="nav-link" view={pages.overview} store={store} >Overview</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" view={pages.users} store={store}>Users</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" view={pages.settings} store={store}>Settings</Link>
                </li>
            </ul>
        );

        const UserBar = (
            <div className="btn-group d-none d-md-block">
                <button className="btn btn-success">
                    <i className="fa fa-bell" />
                </button>
                <Link view={pages.settings} store={store} className="btn btn-success">
                    <span className="mx-1">
                        {authStore.userName}
                    </span>
                </Link>
            </div>
        );

        const Actions = observer(() => (
            <div>
                <Link view={pages.settings} store={store} className="btn btn-success d-md-none">
                    <i className="fa fa-user-circle" />
                </Link>
                {authStore.isLoggedIn && UserBar}
            </div>
        ));

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
