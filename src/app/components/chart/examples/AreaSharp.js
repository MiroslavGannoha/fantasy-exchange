import * as React from 'react';
import EChart from '../index'
import { colors } from '../options'

class AreaSharpChart extends React.Component {
  constructor(props) {
    super(props)
    this.options = {
      legend: {
        display: false
      },
      maintainAspectRatio: false,
      spanGaps: false,
      elements: {
        line: {
          tension: 0.000001
        }
      },
      scales: {
        yAxes: [
          {
            ticks: {
              min: -80,
              max: 80,
              stepSize: 40,
              padding: 10,
              display: this.props.ticks
            },
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.05)',
              zeroLineColor: 'rgba(255, 146, 139, 0.8)',
              drawTicks: false
            },
          }
        ],
        xAxes: [
          {
            ticks: {
              autoSkip: false
            },
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.05)'
            }
          }
        ]
      }
    }
    this.state = {
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            borderWidth: 1,
            borderColor: colors.red.alpha(0.9).string(),
            backgroundColor: colors.red.alpha(0.4).string(),
            pointBackgroundColor: colors.red.alpha(0.9).string(),
            radius: 0,
            data: [-60, 20, -40, 40, -20, 60],
            label: 'Dataset',
            fill: 'origin'
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

export default AreaSharpChart
