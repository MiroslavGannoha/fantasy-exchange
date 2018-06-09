import * as React from 'react';
import PropTypes from 'prop-types'
import ENavlist from '../index'
import { Nav, NavItem, NavLink } from 'reactstrap'

const propTypes = {
  className: PropTypes.string
}

class ENavlistActiveBg extends React.Component {
  render() {
    return (
      <div className="card p-3">
        <ENavlist activeBg>
          <Nav>
            <NavItem>
              <NavLink className="active" href="" onClick={(e) => e.preventDefault()}>
                <i className="fa fa-fw fa-home mr-1"></i>
                <span>Home</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" onClick={(e) => e.preventDefault()}>
                <i className="fa fa-fw fa-bookmark mr-1"></i>
                <span>Bookmarks</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" onClick={(e) => e.preventDefault()}>
                <i className="fa fa-fw fa-envelope mr-1"></i>
                <span>Messages</span>
                <span className="badge badge-light ml-1">4</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" onClick={(e) => e.preventDefault()}>
                <i className="fa fa-fw fa-cog mr-1"></i>
                <span>Settings</span>
              </NavLink>
            </NavItem>
          </Nav>
        </ENavlist>
      </div>
    );
  }
}

ENavlistActiveBg.propTypes = propTypes

export default ENavlistActiveBg
