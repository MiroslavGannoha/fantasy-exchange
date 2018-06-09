# Slider `Single`

Custom slider element based on [rc-slider](https://github.com/react-component/slider) component.

<!-- STORY -->

### Usage
```jsx
import * as React from 'react';
import ESlider from 'elements/slider'

class ESliderSingle extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: 50
    }
  }

  handleChange(value) {
    if (value !== this.state.value) {
      this.setState({
        value: value
      })
    }
  }

  render() {
    return (
      <ESlider defaultValue={this.state.value} onChange={this.handleChange} />
    )
  }
}

export default ESliderSingle
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
