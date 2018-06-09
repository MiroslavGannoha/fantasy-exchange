import * as React from 'react';
import Select from 'react-select'

import './select.css'

const defaultProps = {
  clearable: false
}

class ESelect extends React.Component {

  render() {
    return <Select {...this.props}/>
  }
}

ESelect.defaultProps = defaultProps

export default ESelect
