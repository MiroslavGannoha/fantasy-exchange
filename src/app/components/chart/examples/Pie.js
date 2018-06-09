import * as React from 'react';
import { colors } from '../options'
import EChart from '../index'

class EPieChart extends React.Component {
  constructor(props) {
    super(props)
    this.options = {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20
        }
      }
    }
    this.state = {
      data: {
        labels: ['Mon', 'Tue', 'Wed'],
        datasets: [
          {
            label: 'Pie',
            backgroundColor: colors.array(),
            hoverBorderColor: '#fff',
            data: [5, 10, 8]
          }
        ]
      }
    }
  }

  render() {
    return (
      <EChart type="pie" data={this.state.data} options={this.options} {...this.props}/>
    )
  }
}

export default EPieChart
