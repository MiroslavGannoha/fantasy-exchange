import * as React from 'react';
import PropTypes from 'prop-types'
import ENavbar from '../index'
import { Nav, NavItem, NavLink } from 'reactstrap'

const Brand = () => (
  <a className="e-logo mx-4 my-2" href="" onClick={(e) => e.preventDefault()}>
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

const Actions = () => {
  const inputStyle = {
    maxWidth: '170px'
  }
  return (
    <form className="form-inline">
      <div className="input-with-ico">
        <i className="input-ico fa fa-fw fa-search"></i>
        <input className="form-control form-control-rounded" type="search" placeholder="Search" style={inputStyle}/>
      </div>
    </form>
  )
}

const propTypes = {
  className: PropTypes.string
}

class ENavbarBrandInCenter extends React.Component {
  render() {
    return (
      <ENavbar
        title="TITLE"
        brandNode={<Brand/>}
        collapseNode={<CollapseNav/>}
        actionsNode={<Actions/>}
        className={this.props.className}
        brandInCenter/>
    );
  }
}

ENavbarBrandInCenter.propTypes = propTypes

export default ENavbarBrandInCenter
