import * as React from 'react';
import { observer } from 'mobx-react';
import ENavlist from '../navlist';
import { NavLink } from 'react-router-dom';
import { NavItem, Nav } from 'reactstrap';

interface IProps {
    className?: string;
}

@observer
class Sidebar extends React.Component<IProps> {
    public render() {
        return (
                <div className={'card p-3 ' + this.props.className || ''}>
                    <ENavlist activeBg={true}>
                        <Nav>
                            <NavItem>
                                <NavLink to="/overview" className="nav-link">
                                    <i className="fa fa-fw fa-home mr-1" />
                                    <span>Overview</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/Players" className="nav-link">
                                    <i className="fa fa-fw fa-bar-chart mr-1" />
                                    <span>Players</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </ENavlist>
                </div>
        );
    }
}

export default Sidebar;
