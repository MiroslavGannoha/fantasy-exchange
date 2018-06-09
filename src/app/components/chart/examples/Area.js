import * as React from 'react';
import { colors } from '../options'
import EChart from '../index'

class EAreaChart extends React.Component {
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
            label: 'Area',
            borderColor: '#ffffff',
            borderWidth: 2,
            backgroundColor: colors.green.alpha(0.6).string(),
            pointRadius: 3,
            data: [3, 12, 3, 12]
          },
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

export default EAreaChart
