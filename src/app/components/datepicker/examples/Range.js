import * as React from 'react';
import EDatepickerRange from '../types/range'

class ERangePicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: []
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
      <EDatepickerRange value={this.state.date} onChange={this.handleDateChange} placeholder="Range" />
    )
  }
}

export default ERangePicker
