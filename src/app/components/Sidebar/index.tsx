import * as React from 'react';
import { observer } from 'mobx-react';
import ENavlist from '../navlist';
import { NavLink } from 'react-router-dom';

interface IProps {
    className?: string;
}

@observer
class Sidebar extends React.Component<IProps> {
    public render() {
        return (
                <div className={'card p-3 ' + this.props.className || ''}>
                    <ENavlist activeBg={true}>
                        <ul className="nav">
                            <li className="nav-item">
                                <NavLink to="/overview">
                                    <i className="fa fa-fw fa-bar-chart mr-1" />
                                    <span>Overview</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Players">
                                    <i className="fa fa-fw fa-bar-chart mr-1" />
                                    <span>Players</span>
                                </NavLink>
                            </li>
                        </ul>
                    </ENavlist>
                </div>
        );
    }
}

export default Sidebar;
