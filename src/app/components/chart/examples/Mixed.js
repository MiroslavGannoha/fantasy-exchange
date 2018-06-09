import * as React from 'react';
import { colors } from '../options'
import EChart from '../index'

class EMixedChart extends React.Component {
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
        xAxes: [
          {
            categoryPercentage: 0.6,
            barPercentage: 0.4,
          }
        ]
      },
    }
    this.state = {
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu'],
        datasets: [
          {
            type: 'line',
            label: 'Line',
            borderColor: colors.red.string(),
            backgroundColor: 'transparent',
            data: [3, 12, 3, 12]
          },
          {
            type: 'bar',
            label: 'Bar',
            backgroundColor: colors.green.string(),
            borderColor: '#ffffff',
            data: [11, 8, 13, 6]
          }
        ]
      }
    }
  }

  render() {
    return (
      <EChart type="bar" data={this.state.data} options={this.options} {...this.props}/>
    )
  }
}

export default EMixedChart
