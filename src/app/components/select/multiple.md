# Select `Multiple \ Tags`

Custom select element based on [react-select](https://github.com/JedWatson/react-select) component.

<!-- STORY -->

### Usage
```jsx
import * as React from 'react';
import ESelect from 'elements/select'

class ESelectMultiple extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      selected: [
        { value: 1, label: 'One' }
      ]
    }
  }

  handleChange(option) {
    this.setState({
      selected: option
    })
  }

  render() {
    const options = [
      { value: 1, label: 'One' },
      { value: 2, label: 'Two' },
      { value: 3, label: 'Three' }
    ]

    return (
      <ESelect
        value={this.state.selected}
        options={options}
        onChange={this.handleChange}
        multi={true}
        placeholder="Multiple"/>
    )
  }
}

export default ESelectMultiple
```

### Props

| Name        | Type                                |
|-------------|-------------------------------------|
| value       | PropTypes.object                    |
| options     | PropTypes.arrayOf(PropTypes.object) |
| placeholder | PropTypes.string                    |
| multi       | PropTypes.bool                      |

See other props in the [docs](https://github.com/JedWatson/react-select).

### Dependencies

| Name                                                      | Install                           |
|-----------------------------------------------------------|-----------------------------------|
| [react-select](https://github.com/JedWatson/react-select) | `npm install react-select --save` |

### See Also
- [react-select](https://github.com/JedWatson/react-select)
