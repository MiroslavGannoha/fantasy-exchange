import * as React from 'react';
import { ESliderRange } from '../index'

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
