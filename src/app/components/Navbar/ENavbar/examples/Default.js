import * as React from 'react';
import PropTypes from 'prop-types'
import ENavbar from '../index'
import {
  Nav, NavItem, NavLink,
  UncontrolledDropdown as Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap'

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
    <form className="form-inline d-md-none d-lg-flex">
      <div className="input-with-ico">
        <i className="input-ico fa fa-fw fa-search"></i>
        <input className="form-control form-control-rounded" type="search" placeholder="Search"/>
      </div>
    </form>
  </div>
)

const Actions = () => (
  <ul className="navbar-nav flex-nowrap flex-row">
    <li className="nav-item d-none d-md-inline-block">
      <a className="nav-link" href="">
        <i className="fa fa-bell"></i>
      </a>
    </li>
    <Dropdown nav inNavbar>
      <DropdownToggle nav caret>
        <span className="d-none d-md-inline">Morty Smith</span>
        <span className="d-md-none fa fa-user-circle"></span>
      </DropdownToggle>
      <DropdownMenu right>
        <a className="dropdown-item d-md-none" href="" onClick={(e) => e.preventDefault()}>
          <div className="d-flex justify-content-between align-items-center">
            <span>Alerts</span>
            <span className="badge badge-danger">3</span>
          </div>
        </a>
        <a className="dropdown-item" href="" onClick={(e) => e.preventDefault()}>Profile</a>
        <a className="dropdown-item" href="" onClick={(e) => e.preventDefault()}>Settings</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="" onClick={(e) => e.preventDefault()}>Logout</a>
      </DropdownMenu>
    </Dropdown>
  </ul>
)

const propTypes = {
  className: PropTypes.string
}

class ENavbarDefault extends React.Component {
  render() {
    return (
      <ENavbar
        title="TITLE"
        brandNode={<Brand/>}
        collapseNode={<CollapseNav/>}
        actionsNode={<Actions/>}
        className={this.props.className} />
    );
  }
}

ENavbarDefault.propTypes = propTypes

export default ENavbarDefault
