import * as React from 'react';
import EDatepicker from '../index'

class EDatepickerDate extends React.Component {
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
      <EDatepicker value={this.state.date} onChange={this.handleDateChange} placeholder="Date" />
    )
  }
}

export default EDatepickerDate
