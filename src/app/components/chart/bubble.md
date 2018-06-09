# Chart `Bubble`

For complete configuration notes, please, refer to the original [Chart.js - Bubble](http://www.chartjs.org/docs/latest/charts/bubble.html) documentation.

<!-- STORY -->

### Usage

```jsx
import * as React from 'react';
import EChart from 'elements/chart'

class EBubbleChart extends React.Component {
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
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },
    }
    this.state = {
      data: {
        datasets: [
          {
            label: 'Bubble',
            backgroundColor: 'green',
            borderColor: '#ffffff',
            data: [
              { x: 3, y: 6, r: 5 },
              { x: 8, y: 4, r: 10 },
              { x: 4, y: 8, r: 3 },
              { x: 1, y: 5, r: 8 },
              { x: 2, y: 1, r: 12 },
              { x: 5, y: 3, r: 6 },
              { x: 3, y: 3, r: 5 },
              { x: 6, y: 6, r: 7 },
            ]
          }
        ]
      }
    }
  }

  render() {
    return (
      <EChart type="bubble" data={this.state.data} options={this.options} {...this.props}/>
    )
  }
}

export default EBubbleChart
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
