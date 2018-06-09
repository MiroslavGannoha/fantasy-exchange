# Chart `Line`

For complete configuration notes, please, refer to the original [Chart.js - Line](http://www.chartjs.org/docs/latest/charts/line.html) documentation.

<!-- STORY -->

### Usage

```jsx
import * as React from 'react';
import EChart from 'elements/chart'

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
            borderColor: 'green',
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
