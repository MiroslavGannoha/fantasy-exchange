# Navlist

Vertical navigation component.

<!-- STORY -->

### Usage

```js
import * as React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap'
import ENavlist from 'elements/navlist'
```
```jsx
class ENavlistDefault extends React.Component {
  render() {
    return (
      <div className="card p-3">
        <ENavlist>
          <Nav>
            <NavItem>
              <NavLink className="active" href="">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Bookmarks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Messages</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Settings</NavLink>
            </NavItem>
          </Nav>
        </ENavlist>
      </div>
    );
  }
}

export default ENavlistDefault
```

### Props

| Name       | Type           | Default | Description |
|------------|----------------|---------|-------------|
| activeBg   | PropTypes.bool | `false` | Flag that puts a background color on the active items. |
| activeBold | PropTypes.bool | `false` | Flag that makes the active items bold. |
| children   | PropTypes.node | `null`  | The list of nav links. Should be a `.nav` element. |


### See Also
- [Reactstrap - Nav](https://reactstrap.github.io/components/navs/)
