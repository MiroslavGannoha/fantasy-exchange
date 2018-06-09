# Slider `Double`

Custom slider element based on [rc-slider](https://github.com/react-component/slider) component.

<!-- STORY -->

### Usage
```jsx
import * as React from 'react';
import ESlider from 'elements/slider'

class ESliderDouble extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: [25, 75]
    }
  }

  handleChange(value) {
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <ESliderRange value={this.state.value} onChange={this.handleChange} />
    )
  }
}

export default ESliderDouble
```

### Props

| Name     | Type                                                  | Default |
|----------|-------------------------------------------------------|---------|
| min      | PropTypes.number                                      | `0`     |
| max      | PropTypes.number                                      | `100`   |
| value    | PropTypes.number, PropTypes.arrayOf(PropTypes.number) | `0`     |
| onChange | PropTypes.func                                        | -       |
| variant  | PropTypes.string                                      | -       |

See other props in the [docs](https://github.com/react-component/slider#common-api).

### Dependencies

| Name        | Install    |
|-------------|---------|
| [rc-slider](https://github.com/react-component/slider) | `npm install rc-slider --save` |

### See Also
- [rc-slider](https://github.com/react-component/slider)
