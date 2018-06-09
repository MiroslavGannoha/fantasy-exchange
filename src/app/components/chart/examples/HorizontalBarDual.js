import * as React from 'react';
import { colors } from '../options'
import EChart from '../index'

class BarHorizontalDualChart extends React.Component {
  constructor(props) {
    super(props)
    this.options = {
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: true
            },
          }
        ],
        yAxes: [
          {
            categoryPercentage: 0.6,
            barPercentage: 0.8,
          }
        ]
      },
    }
    this.state = {
      data: {
        labels: ['Vue', 'Angular', 'React', 'Ember'],
        datasets: [
          {
            label: 'One',
            backgroundColor: colors.green.string(),
            data: [35, 25, 40, 20]
          },
          {
            label: 'Two',
            backgroundColor: colors.blue.string(),
            data: [40, 15, 35, 30]
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

export default BarHorizontalDualChart
