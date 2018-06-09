import * as React from 'react';
import PropTypes from 'prop-types'
import ENavbar from '../index'
import { Nav, NavItem, NavLink } from 'reactstrap'

const Brand = () => (
  <a className="e-logo mx-4" href="" onClick={(e) => e.preventDefault()}>
    <span>Elements <small>stay simple</small></span>
  </a>
)

const CollapseNav = () => (
  <div className="d-md-flex">
    <Nav className="navbar-nav mr-auto py-3 py-md-0">
      <NavItem>
        <NavLink className="active" href="" onClick={(e) => e.preventDefault()}>Overview</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="" onClick={(e) => e.preventDefault()}>Bootstrap</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="" onClick={(e) => e.preventDefault()}>Pages</NavLink>
      </NavItem>
    </Nav>
  </div>
)

const Actions = () => (
  <button className="btn btn-success" type="button">
    <i className="fa fa-user-circle"></i>
    <span className="d-none d-md-inline-block">Morty Smith</span>
  </button>
)

const propTypes = {
  className: PropTypes.string
}

class ENavbarNavInCenter extends React.Component {
  render() {
    return (
      <ENavbar
        title="TITLE"
        brandNode={<Brand/>}
        collapseNode={<CollapseNav/>}
        actionsNode={<Actions/>}
        className={this.props.className}
        navInCenter/>
    );
  }
}

ENavbarNavInCenter.propTypes = propTypes

export default ENavbarNavInCenter
