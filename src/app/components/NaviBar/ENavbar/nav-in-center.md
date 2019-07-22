# Navbar `nav-in-center`

Variant of the [Navbar](/?selectedKind=Components/Navbar&selectedStory=Default) component with the centrally located navigation.

<!-- STORY -->

### Usage

```js
import * as React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap'
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
  </div>
)

const Actions = () => (
  <button className="btn btn-success" type="button">
    <i className="fa fa-user-circle"></i>
    <span className="d-none d-md-inline-block">Morty Smith</span>
  </button>
)

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

export default ENavbarNavInCenter

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
