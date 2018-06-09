import React from 'react'
import PropTypes from 'prop-types'
import Flatpickr from 'react-flatpickr'
import EDatepicker from '../../index'

const propTypes = {
  prepend: PropTypes.string,
  append: PropTypes.string,
  clear: PropTypes.bool
}

class EDatepickerAddons extends EDatepicker {
  constructor(props) {
    super(props)
    this.clearDate = this.clearDate.bind(this)
    this.localDefaults = {}
  }

  clearDate() {
    this.picker.flatpickr.clear()
  }

  render() {
    const Prepend = () => (
      <span className="input-group-prepend">
        <span className="input-group-text">
          <i className={this.props.prepend}></i>
        </span>
      </span>
    )

    const Append = () => (
      <span className="input-group-append">
        <span className="input-group-text">
          <i className={this.props.append}></i>
        </span>
      </span>
    )

    const Clear = () => (
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button" onClick={this.clearDate}>
          <i className="fa fa-close"></i>
        </button>
      </div>
    )

    return (
      <div className="input-group">
        { this.props.prepend && <Prepend/> }
        <Flatpickr
          className="form-control"
          ref={(input) => { this.picker = input}}
          value={this.state.dates}
          options={this.options}
          placeholder={this.props.placeholder}
          onChange={this.handleDateChange}/>
        { this.props.clear && this.state.dates.length > 0 && <Clear/> }
        { this.props.append && <Append/> }
      </div>
    )
  }
}

EDatepickerAddons.propTypes = propTypes

export default EDatepickerAddons
