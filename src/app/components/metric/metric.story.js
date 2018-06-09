import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocsCustom } from '.storybook/utils/readme'

import EMetric from 'elements/metric'
import EMetricTrend from 'elements/metric/examples/IncomeTrend'

import defaultDocs from './README.md'
import trendDocs from './trend.md'

storiesOf('Components/Metric', module)
  .addDecorator(withDocsCustom(defaultDocs))
  .add('Default', () => (
    <div className="d-flex">
      <EMetric className="mr-3" title="Users" value="3,200" icon="fa-user"/>
      <EMetric className="" title="Income" value="8,400" icon="fa-usd" iconDark/>
    </div>
  ))

storiesOf('Components/Metric', module)
  .addDecorator(withDocsCustom(trendDocs))
  .add('With Trend', () => (
    <div className="row">
      <div className="col-md-3">
        <EMetricTrend/>
      </div>
    </div>
  ))
