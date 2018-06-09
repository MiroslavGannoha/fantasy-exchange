import * as React from 'react';
import { colors } from '../options'
import EChart from '../index'

class EBarHorizontalChart extends React.Component {
  constructor(props) {
    super(props)
    this.options = {
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ],
        yAxes: [
          {
            categoryPercentage: 0.6,
            barPercentage: 0.4,
          }
        ]
      },
    }
    this.state = {
      data: {
        labels: ['Mon', 'Tue', 'Wed'],
        datasets: [
          {
            label: 'Horizontal Bar',
            backgroundColor: colors.green.string(),
            borderColor: '#ffffff',
            data: [13, 9, 5]
          }
        ]
      }
    }
  }

  render() {
    return (
      <EChart type="horizontalBar" data={this.state.data} options={this.options} {...this.props}/>
    )
  }
}

export default EBarHorizontalChart
