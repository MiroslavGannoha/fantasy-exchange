import * as React from 'react';
import PropTypes from 'prop-types'
import ENavline from '../index'
import { Nav, NavItem, NavLink } from 'reactstrap'

const propTypes = {
  className: PropTypes.string
}

class ENavlineArrow extends React.Component {
  render() {
    return (
      <div className="card px-2">
        <ENavline arrow>
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
          </Nav>
        </ENavline>
      </div>
    );
  }
}

ENavlineArrow.propTypes = propTypes

export default ENavlineArrow
