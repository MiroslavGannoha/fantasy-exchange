# Toggle

Custom toggle element based on [react-switch](https://github.com/yogaboll/react-switch) component.

<!-- STORY -->

### Usage
```jsx
import * as React from 'react';
import EToggle from 'elements/toggle'

class EToggleDefault extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      checked: true
    }
  }

  handleChange(value) {
    if (value !== this.state.checked) {
      this.setState({
        checked: value
      })
    }
  }

  render() {
    return (
      <EToggle checked={this.state.checked} onChange={this.handleChange} />
    )
  }
}

export default EToggleDefault
```

### Props

| Name     | Type                      |
|----------|---------------------------|
| checked  | PropTypes.bool.isRequired |
| onChange | PropTypes.func.isRequired |

See other props in the [docs](https://github.com/yogaboll/react-switch#api).

### Dependencies

| Name                                                     | Install                           |
|----------------------------------------------------------|-----------------------------------|
| [react-switch](https://github.com/yogaboll/react-switch) | `npm install react-switch --save` |

### See Also
- [react-switch](https://github.com/yogaboll/react-switch)
