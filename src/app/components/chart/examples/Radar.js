import * as React from 'react';
import { colors } from '../options'
import EChart from '../index'

class ERadarChart extends React.Component {
  constructor(props) {
    super(props)
    this.options = {
      legend: {
        display: false
      },
      scale: {
        ticks: {
          beginAtZero: true
        }
      }
    }
    this.state = {
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
          {
            label: 'Radar',
            borderColor: colors.green.alpha(0.9).string(),
            backgroundColor: colors.green.alpha(0.5).string(),
            data: [12.5, 12.5, 12.5, 12.5, 12.5, 12.5]
          }
        ]
      }
    }
  }

  render() {
    return (
      <EChart type="radar" data={this.state.data} options={this.options} {...this.props}/>
    )
  }
}

export default ERadarChart
