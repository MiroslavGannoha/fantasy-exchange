import * as React from 'react';
import ETimeDatetime from '../types/time'

class ETimePicker extends React.Component {
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
      <ETimeDatetime value={this.state.date} onChange={this.handleDateChange} placeholder="Time" />
    )
  }
}

export default ETimePicker
