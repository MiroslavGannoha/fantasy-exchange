import * as React from 'react';
import { inject, observer } from 'mobx-react';

// import { NavLink } from 'react-router-dom';
import { Link } from 'mobx-router';
import ENavlist from '../navlist';
import { pages } from '../../../app';
import { Stores } from '../../stores';

interface ISidebarProps {
    className?: string;
}

@inject(Stores.APP)
@observer
class Sidebar extends React.Component<ISidebarProps> {
    private appStore = this.props[Stores.APP];
    public render() {
        console.log(this.appStore);
        const { currentView } = this.appStore.router;
        console.log(currentView);
        return (
                <div className={'card p-3 ' + this.props.className || ''}>
                    <ENavlist activeBg={true}>
                        <ul className="nav">
                            <li className={(currentView === pages.overview ? 'active ' : '') + 'nav-item'}>
                                <Link
                                    view={pages.overview}
                                    store={this.appStore}
                                    className="nav-link px-2"
                                >
                                    <i className="fa fa-fw fa-bar-chart mr-1" />
                                    <span>Overview</span>
                                </Link>
                            </li>
                            <li className={(currentView === pages.users ? 'active ' : '') + 'nav-item'}>
                                <Link view={pages.users} store={this.appStore} className="nav-link px-2">
                                    <i className="fa fa-fw fa-clone mr-1" />
                                    <span>CRUD</span>
                                </Link>
                            </li>
                            <li className={(currentView === pages.settings ? 'active ' : '') + 'nav-item'}>
                                <Link view={pages.settings} store={this.appStore} className="nav-link px-2">
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
