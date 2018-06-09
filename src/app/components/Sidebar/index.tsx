import * as React from 'react';
import { inject, observer } from 'mobx-react';

// import { NavLink } from 'react-router-dom';
import { Link } from 'mobx-router';
import ENavlist from '../navlist';
import { pages } from '../../../app';
import { Stores } from '../../stores';

@inject(Stores.APP)
@observer
class Sidebar extends React.Component {
    public render() {
        return (
                <div className="card p-3">
                    <ENavlist activeBg={true}>
                        <ul className="nav">
                            <li className="nav-item">
                                <Link
                                    view={pages.overview}
                                    store={this.props[Stores.APP]}
                                    className="nav-link px-2"
                                >
                                    <i className="fa fa-fw fa-bar-chart mr-1" />
                                    <span>Overview</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link view={pages.users} store={this.props[Stores.APP]} className="nav-link px-2">
                                    <i className="fa fa-fw fa-clone mr-1" />
                                    <span>CRUD</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link view={pages.settings} store={this.props[Stores.APP]} className="nav-link px-2">
                                    <i className="fa fa-fw fa-cog mr-1" />
                                    <span>Settings</span>
                                </Link>
                            </li>
                        </ul>
                    </ENavlist>
                </div>
        );
    }
}

export default Sidebar;
