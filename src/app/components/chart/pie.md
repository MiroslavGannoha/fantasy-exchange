# Chart `Pie`

For complete configuration notes, please, refer to the original [Chart.js - Doughnut and Pie](http://www.chartjs.org/docs/latest/charts/doughnut.html) documentation.

<!-- STORY -->

### Usage

```jsx
import * as React from 'react';
import EChart from 'elements/chart'

class EPieChart extends React.Component {
  constructor(props) {
    super(props)
    this.options = {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20
        }
      }
    }
    this.state = {
      data: {
        labels: ['Mon', 'Tue', 'Wed'],
        datasets: [
          {
            label: 'Pie',
            backgroundColor: ['red', 'green', 'blue'],
            hoverBorderColor: '#fff',
            data: [5, 10, 8]
          }
        ]
      }
    }
  }

  render() {
    return (
      <EChart type="pie" data={this.state.data} options={this.options} {...this.props}/>
    )
  }
}

export default EPieChart
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
