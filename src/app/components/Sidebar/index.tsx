import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'mobx-router';
import ENavlist from '../navlist';
import { pages } from '../../../app';
import { IStores, IAppStore } from '../../stores';

interface IProps {
    store?: IAppStore;
    className?: string;
}

@inject(({ store }: IStores) => ({ store }))
@observer
class Sidebar extends React.Component<IProps> {
    public render() {
        const { currentView } = this.props.store.router;
        return (
                <div className={'card p-3 ' + this.props.className || ''}>
                    <ENavlist activeBg={true}>
                        <ul className="nav">
                            <li className={(currentView === pages.overview ? 'active ' : '') + 'nav-item'}>
                                <Link
                                    view={pages.overview}
                                    store={this.props.store}
                                    className="nav-link px-2"
                                >
                                    <i className="fa fa-fw fa-bar-chart mr-1" />
                                    <span>Overview</span>
                                </Link>
                            </li>
                            <li className={(currentView === pages.market ? 'active ' : '') + 'nav-item'}>
                                <Link view={pages.market} store={this.props.store} className="nav-link px-2">
                                    <i className="fa fa-fw fa-shopping-cart mr-1" />
                                    <span>Market</span>
                                </Link>
                            </li>
                            <li className={(currentView === pages.crud ? 'active ' : '') + 'nav-item'}>
                                <Link view={pages.crud} store={this.props.store} className="nav-link px-2">
                                    <i className="fa fa-fw fa-clone mr-1" />
                                    <span>CRUD</span>
                                </Link>
                            </li>
                            <li className={(currentView === pages.users ? 'active ' : '') + 'nav-item'}>
                                <Link view={pages.users} store={this.props.store} className="nav-link px-2">
                                    <i className="fa fa-fw fa-clone mr-1" />
                                    <span>Users</span>
                                </Link>
                            </li>
                            <li className={(currentView === pages.players ? 'active ' : '') + 'nav-item'}>
                                <Link view={pages.players} store={this.props.store} className="nav-link px-2">
                                    <i className="fa fa-fw fa-clone mr-1" />
                                    <span>Players</span>
                                </Link>
                            </li>
                            {/* <li className={(currentView === pages.rights ? 'active ' : '') + 'nav-item'}>
                                <Link view={pages.rights} store={this.props.store} className="nav-link px-2">
                                    <i className="fa fa-fw fa-clone mr-1" />
                                    <span>Rights</span>
                                </Link>
                            </li> */}
                            <li className={(currentView === pages.settings ? 'active ' : '') + 'nav-item'}>
                                <Link view={pages.settings} store={this.props.store} className="nav-link px-2">
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
