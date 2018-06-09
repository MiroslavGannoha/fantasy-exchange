# Navline `arrow`

A variant of the [Navline](/?selectedKind=Components/Navline&selectedStory=Default) component with the decorative arrow.

<!-- STORY -->

### Usage

```js
import * as React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap'
import ENavline from 'elements/navline'
```
```jsx
class ENavlineDefault extends React.Component {
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

export default ENavlineDefault
```

### Props

| Name     | Type           | Default | Description |
|----------|----------------|---------|-------------|
| arrow    | PropTypes.bool | `false` | Flag that puts a decorative arrow under the navline.  |
| children | PropTypes.node | `null`  | The list of nav links. Should be a `.nav` element. |

### See Also
- [Reactstrap - Nav](https://reactstrap.github.io/components/navs/)
