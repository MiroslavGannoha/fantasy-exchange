# Navbar

The main navigation component. Based on and extended from the Bootstrap [Navbar](http://getbootstrap.com/docs/4.0/components/navbar/) component.

<!-- STORY -->

### Usage

```js
import * as React from 'react';
import { Nav, NavItem, NavLink, UncontrolledDropdown as Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap'
import ENavbar from 'elements/navbar'
```
```jsx
const Brand = () => (
  <a className="e-logo mx-4" href="">
    <span>Elements <small>stay simple</small></span>
  </a>
)

const CollapseNav = () => (
  <div className="d-md-flex">
    <Nav className="navbar-nav mr-auto py-3 py-md-0">
      <NavItem>
        <NavLink className="active" href="">Overview</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="">Bootstrap</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="">Pages</NavLink>
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
        <a className="dropdown-item d-md-none" href="">
          <div className="d-flex justify-content-between align-items-center">
            <span>Alerts</span>
            <span className="badge badge-danger">3</span>
          </div>
        </a>
        <a className="dropdown-item" href="">Profile</a>
        <a className="dropdown-item" href="">Settings</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="">Logout</a>
      </DropdownMenu>
    </Dropdown>
  </ul>
)

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

export default ENavbarDefault
```

### Props

| Name          | Type              | Default | Description |
|---------------|-------------------|---------|-------------|
| title         | PropTypes.string  | `''`    | Page title that visible only on small screens. |
| navInCenter   | PropTypes.bool    | `false` | Flag that puts `nav` node to the center of navbar. |
| brandInCenter | PropTypes.bool    | `false` | Flag that puts `brand` node to the center. |
| brandNode     | PropTypes.node    | `null`  | App brand (logo). |
| collapseNode  | PropTypes.node    | `null`  | Content that hides on the small screens (usually, nav links). |
| actionsNode   | PropTypes.node    | `null`  | Place for the additional active elements. |

### See Also
- [Bootstrap - Navbar](http://getbootstrap.com/docs/4.0/components/navbar/)
- [Reactstrap - Nav](https://reactstrap.github.io/components/navs/)
- [Reactstrap - Dropdowns](https://reactstrap.github.io/components/dropdowns/)
