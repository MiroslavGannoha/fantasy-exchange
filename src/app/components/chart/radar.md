# Chart `Radar`

For complete configuration notes, please, refer to the original [Chart.js - Radar](http://www.chartjs.org/docs/latest/charts/radar.html) documentation.

<!-- STORY -->

### Usage

```jsx
import * as React from 'react';
import EChart from 'elements/chart'

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
            borderColor: 'green',
            backgroundColor: 'lime',
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
