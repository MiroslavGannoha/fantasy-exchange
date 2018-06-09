import * as React from 'react';
import { colors } from '../options'
import EChart from '../index'

class ELineChart extends React.Component {
  constructor(props) {
    super(props)
    this.options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ],
      },
    }
    this.state = {
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu'],
        datasets: [
          {
            label: 'Line',
            borderColor: colors.green.string(),
            backgroundColor: 'transparent',
            data: [3, 12, 3, 12]
          }
        ]
      }
    }
  }

  render() {
    return (
      <EChart type="line" data={this.state.data} options={this.options} {...this.props}/>
    )
  }
}

export default ELineChart
