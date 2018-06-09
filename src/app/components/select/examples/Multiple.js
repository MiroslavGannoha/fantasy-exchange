import * as React from 'react';
import ESelect from '../index'

class ESelectMultiple extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      selected: [
        { value: 1, label: 'One' }
      ]
    }
  }

  handleChange(option) {
    this.setState({
      selected: option
    })
  }

  render() {
    const options = [
      { value: 1, label: 'One' },
      { value: 2, label: 'Two' },
      { value: 3, label: 'Three' }
    ]

    return (
      <ESelect
        value={this.state.selected}
        options={options}
        onChange={this.handleChange}
        multi={true}
        placeholder="Multiple"/>
    )
  }
}

export default ESelectMultiple
