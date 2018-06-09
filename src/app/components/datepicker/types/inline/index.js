import React from 'react'
import Flatpickr from 'react-flatpickr'
import EDatepicker from '../../index'

class EDatepickerInline extends EDatepicker {
  constructor(props) {
    super(props)
    this.localDefaults = {
      inline: true
    }
  }

  render() {
    return (
      <Flatpickr
        className="d-none"
        value={this.state.dates}
        options={this.options}
        onChange={this.handleDateChange}></Flatpickr>
    )
  }
}

export default EDatepickerInline
