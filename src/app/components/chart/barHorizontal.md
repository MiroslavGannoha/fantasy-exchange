# Chart `Horizontal Bar`

For complete configuration notes, please, refer to the original [Chart.js - Bar](http://www.chartjs.org/docs/latest/charts/bar.html) documentation.

<!-- STORY -->

### Usage

```jsx
import * as React from 'react';
import EChart from 'elements/chart'

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
            backgroundColor: 'green',
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
