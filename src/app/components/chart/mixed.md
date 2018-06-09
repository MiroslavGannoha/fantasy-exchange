# Chart `Mixed`

For complete configuration notes, please, refer to the original [Chart.js - Mixed](http://www.chartjs.org/docs/latest/charts/mixed.html) documentation.

<!-- STORY -->

### Usage

```jsx
import * as React from 'react';
import EChart from 'elements/chart'

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
            borderColor: 'red',
            backgroundColor: 'transparent',
            data: [3, 12, 3, 12]
          },
          {
            type: 'bar',
            label: 'Bar',
            backgroundColor: 'green',
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
```

### Props

| Name    | Type                                                                                                                   |
|---------|------------------------------------------------------------------------------------------------------------------------|
| type    | PropTypes.oneOf(['bar', 'line', 'doughnut', 'pie', 'horizontalBar', 'radar', 'polar', 'bubble', 'scatter']).isRequired |
| data    | PropTypes.object                                                                                                       |
| options | PropTypes.object                                                                                                       |
| width   | PropTypes.number                                                                                                       |
| height  | PropTypes.number                                                                                                       |

### Dependencies

| Name        | Install    |
|-------------|---------|
| [Chart.js](http://www.chartjs.org/) | `npm install chart.js --save` |


### See Also
- [Chart.js](http://www.chartjs.org/)
