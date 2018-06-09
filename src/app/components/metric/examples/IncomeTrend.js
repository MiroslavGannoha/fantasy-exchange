import * as React from 'react';
import PropTypes from 'prop-types'
import * as classNames from 'classnames';
import EMetric from '../index'
import EChart from '../../chart'

const data = {
  'day': {
    0: random(),
    1: random(),
    2: random(),
    3: random(),
    4: random(),
    5: random(),
  },
  'week': {
    0: random() * 7,
    1: random() * 7,
    2: random() * 7,
    3: random() * 7,
    4: random() * 7,
    5: random() * 7,
  },
  'month': {
    0: random() * 30,
    1: random() * 30,
    2: random() * 30,
    3: random() * 30,
    4: random() * 30,
    5: random() * 30,
  }
}

function random() {
  return Math.round(Math.random() * 10000)
}

const chartOptions = {
  legend: { display: false },
  tooltips: { enabled: false },
  layout: {
    padding: {
      left: 10,
      right: 10
    }
  },
  scales: {
    xAxes: [
      { display: false }
    ],
    yAxes: [
      { display: false }
    ]
  }
}

function capitalize(value) {
  let string = value.toString()
  if (!value) {
    return ''
  }
  return string.charAt(0).toUpperCase().concat(string.slice(1))
}

function formatNumber(n, currency = '', a, d = '.', t = ',') {
  let c = isNaN(Math.abs(a)) ? 0 : a,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c), 10) + "",
        j = i.length > 3 ? i.length % 3 : 0;
  return s + currency + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}

class IncomeTrend extends React.Component {
  static propTypes = {
    height: PropTypes.number
  }

  static defaultProps = {
    height: 41
  }

  constructor(props) {
    super(props)
    this.changePeriod = this.changePeriod.bind(this)
    this.state = {
      period: null,
      data: null
    }
  }

  componentWillMount() {
    this.setState({
      period: Object.keys(data)[0]
    })
  }

  changePeriod(period) {
    if (this.state.period !== period) {
      this.setState({
        period: period
      })
    }
  }

  getData(period) {
    if (data[period]) {
      const dataset = data[period];
      return {
        labels: Object.keys(dataset),
        datasets: [
          {
            label: "Income Trend",
            backgroundColor: '#f5f6f8',
            borderColor: '#686e71',
            data: Object.keys(dataset).map((key) => dataset[key]),
            fill: 'start',
          }
        ]
      }
    }
  }

  render() {
    const currentValue = formatNumber(data[this.state.period][0], '$'),
          currentData =this.getData(this.state.period)

    return (
      <EMetric title="Income" value={currentValue} icon="fa-usd" iconDark>
        <div className="d-flex justify-content-center mt-3">
          <div className="btn-group">
            {
              Object.keys(data).map((field, index) => (
                <button
                  key={index}
                  className={classNames('btn btn-sm btn-outline-secondary', { 'active': field === this.state.period })}
                  onClick={() => this.changePeriod(field)}>{ capitalize(field) }</button>
              ))
            }
          </div>
        </div>
        <div className="mt-3 position-relative">
          <EChart type="line" data={currentData} options={chartOptions} height={this.props.height}/>
        </div>
      </EMetric>
    )
  }
}

export default IncomeTrend
