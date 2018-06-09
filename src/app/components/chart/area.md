# Chart `Area`

Area charts are basically the Line charts with filled backgrounds. For complete configuration notes, please, refer to the original [Chart.js - Line](http://www.chartjs.org/docs/latest/charts/line.html) documentation.

<!-- STORY -->

### Usage

```jsx
import * as React from 'react';
import EChart from 'elements/chart'

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
            backgroundColor: 'green',
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
