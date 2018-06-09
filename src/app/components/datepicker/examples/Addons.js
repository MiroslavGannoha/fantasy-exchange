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
