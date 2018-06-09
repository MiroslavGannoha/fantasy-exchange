# Navlist `active-bg`

A variant of the [Navlist](/?selectedKind=Components/Navlist&selectedStory=Default) component, whose active items has a colored background.

<!-- STORY -->

### Usage

```js
import * as React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap'
import ENavlist from 'elements/navlist'
```
```jsx
class ENavlistActiveBg extends React.Component {
  render() {
    return (
      <div className="card p-3">
        <ENavlist activeBg>
          <Nav>
            <NavItem>
              <NavLink className="active" href="">
                <i className="fa fa-fw fa-home mr-1"></i>
                <span>Home</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">
                <i className="fa fa-fw fa-bookmark mr-1"></i>
                <span>Bookmarks</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">
                <i className="fa fa-fw fa-envelope mr-1"></i>
                <span>Messages</span>
                <span className="badge badge-light ml-1">4</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">
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

export default ENavlistActiveBg
```
#### With Tooltips
```js
import * as React from 'react';
import { Nav, NavItem, NavLink, UncontrolledTooltip as Tooltip } from 'reactstrap'
import ENavlist from 'elements/navlist'
```
```jsx
class ENavlistActiveBgTooltips extends React.Component {
  render() {
    return (
      <div className="card py-3 px-2">
        <ENavlist activeBg>
          <Nav>
            <NavItem>
              <NavLink className="active" href="" id="nav-home">
                <i className="fa fa-fw fa-home"></i>
                <Tooltip placement="right" target="nav-home">
                  Hello world!
                </Tooltip>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" id="nav-bookmarks">
                <i className="fa fa-fw fa-bookmark"></i>
                <Tooltip placement="right" target="nav-bookmarks">
                  Bookmarks
                </Tooltip>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" id="nav-messages">
                <i className="fa fa-fw fa-envelope"></i>
                <Tooltip placement="right" target="nav-messages">
                  Messages
                </Tooltip>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" id="nav-settings">
                <i className="fa fa-fw fa-cog"></i>
                <Tooltip placement="right" target="nav-settings">
                  Settings
                </Tooltip>
              </NavLink>
            </NavItem>
          </Nav>
        </ENavlist>
      </div>
    );
  }
}

export default ENavlistActiveBgTooltips
```

### Props

| Name       | Type           | Default | Description |
|------------|----------------|---------|-------------|
| activeBg   | PropTypes.bool | `false` | Flag that puts a background color on the active items. |
| activeBold | PropTypes.bool | `false` | Flag that makes the active items bold. |
| children   | PropTypes.node | `null`  | The list of nav links. Should be a `.nav` element. |


### See Also
- [Reactstrap - Nav](https://reactstrap.github.io/components/navs/)
- [Reactstrap - Tooltips](https://reactstrap.github.io/components/tooltips/)
