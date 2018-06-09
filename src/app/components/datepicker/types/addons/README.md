# Datepicker `Addons`

Date and time picker based on [react-flatpickr](https://github.com/coderhaoxin/react-flatpickr) component. Its recommended to explore the original library [flatpickr](https://github.com/chmln/flatpickr) as well.

<!-- STORY -->

### Usage
```jsx
import * as React from 'react';
import EDatepickerAddons from '../types/addons'

class EAddonsPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
    this.handleDateChange = this.handleDateChange.bind(this)
  }

  handleDateChange(value) {
    this.setState({
      date: value
    })
  }

  render() {
    return (
      <EDatepickerAddons
        value={this.state.date}
        onChange={this.handleDateChange}
        prepend="fa fa-fw fa-calendar"
        placeholder="Addons"
        clear />
    )
  }
}

export default EAddonsPicker
```

### Props

| Name        | Type                                                                                    | Default |
|-------------|-----------------------------------------------------------------------------------------|---------|
| config      | PropTypes.object. See original [Docs](https://chmln.github.io/flatpickr/options/).      | `{}`    |
| value       | PropTypes.instanceOf(Date), PropTypes.arrayOf(PropTypes.instanceOf(Date)), `[]`, `null` | `null`  |
| placeholder | PropTypes.string                                                                        | -       |
| onChange    | PropTypes.func. Arguments: `date` [ instanceof Date ] - Array of selected dates.        | -       |
| prepend     | PropTypes.string                                                                        | -       |
| append      | PropTypes.string                                                                        | -       |
| clear       | PropTypes.bool                                                                          | -       |


### Dependencies

| Name        | Install    |
|-------------|---------|
| [react-flatpickr](https://github.com/coderhaoxin/react-flatpickr) | `npm install react-flatpickr --save` |

### See Also
- [react-flatpickr](https://github.com/coderhaoxin/react-flatpickr)
- [Vue-flatPickr](https://github.com/ankurk91/vue-flatpickr-component)
