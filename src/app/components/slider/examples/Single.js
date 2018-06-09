import * as React from 'react';
import ESlider from '../index'

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
      <ESlider value={this.state.value} onChange={this.handleChange} />
    )
  }
}

export default ESliderSingle
