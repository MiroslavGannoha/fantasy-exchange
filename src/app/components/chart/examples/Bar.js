import * as React from 'react';
import { colors } from '../options'
import EChart from '../index'

class EBarChart extends React.Component {
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
        labels: ['Mon', 'Tue', 'Wed'],
        datasets: [
          {
            label: 'Bar',
            backgroundColor: colors.green.string(),
            borderColor: '#ffffff',
            data: [7, 10, 13]
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

export default EBarChart
