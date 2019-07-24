import * as React from 'react';
import { observer } from 'mobx-react';
import ENavbar from './ENavbar';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../AuthWrapper';

const NaviBar = observer(() => {
    // const authClient = useAuth0();
    const { user } = useAuth0();
    // const { store, error, loading, data } = useQuery((s) => s.queryPlayer());
    // console.log(store, error, loading, data);

    const Brand = () => (
        <Link className="e-logo mx-4" to="/settings" >
            <span>Elements <small>stay simple</small></span>
        </Link>
    );
    const CollapseNav = () => (
        <ul className="navbar-nav pt-3 pt-md-0">
            <li className="nav-item">
                <Link className="nav-link" to="/overview" >Overview</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
            </li>
        </ul>
    );

    const UserBar = (
        <div className="btn-group d-none d-md-block">
            <button className="btn btn-success">
                <i className="fa fa-bell" />
            </button>
            <Link to="/settings" className="btn btn-success">
                <span className="mx-1">
                    {user ? user.nickname : null}
                </span>
            </Link>
        </div>
    );

    const Actions = observer(() => (
        <div>
            <Link to="/settings" className="btn btn-success d-md-none">
                <i className="fa fa-user-circle" />
            </Link>
            {UserBar}
        </div>
    ));

    return (
        <>
            <ENavbar
                className="my-3 px-lg-4"
                title="Overview"
                brandNode={<Brand />}
                collapseNode={<CollapseNav />}
                actionsNode={<Actions />}
            />
        </>
    );
});

export default NaviBar;
