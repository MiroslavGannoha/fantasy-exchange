import * as React from 'react';
import PropTypes from 'prop-types'
import ENavlist from '../index'
import { Nav, NavItem, NavLink } from 'reactstrap'

const propTypes = {
  className: PropTypes.string
}

class ENavlistActiveBold extends React.Component {
  render() {
    return (
      <div className="card p-3">
        <ENavlist activeBold>
          <Nav>
            <NavItem>
              <NavLink className="active" href="" onClick={(e) => e.preventDefault()}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" onClick={(e) => e.preventDefault()}>Bookmarks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" onClick={(e) => e.preventDefault()}>Messages</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" onClick={(e) => e.preventDefault()}>Settings</NavLink>
            </NavItem>
          </Nav>
        </ENavlist>
      </div>
    );
  }
}

ENavlistActiveBold.propTypes = propTypes

export default ENavlistActiveBold
