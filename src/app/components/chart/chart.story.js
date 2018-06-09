import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocsCustom } from '.storybook/utils/readme'

import ELineChart from 'elements/chart/examples/Line'
import EAreaChart from 'elements/chart/examples/Area'
import EBarChart from 'elements/chart/examples/Bar'
import EBarHorizontalChart from 'elements/chart/examples/BarHorizontal'
import EDonutChart from 'elements/chart/examples/Donut'
import EPieChart from 'elements/chart/examples/Pie'
import ERadarChart from 'elements/chart/examples/Radar'
import EMixedChart from 'elements/chart/examples/Mixed'
import EBubbleChart from 'elements/chart/examples/Bubble'

import baseDocs from './README.md'
import lineDocs from './line.md'
import barDocs from './bar.md'
import horizontalBarDocs from './barHorizontal.md'
import areaDocs from './area.md'
import donutDocs from './donut.md'
import pieDocs from './pie.md'
import radarDocs from './radar.md'
import bubbleDocs from './bubble.md'
import mixedDocs from './mixed.md'

storiesOf('Components/Chart', module)
  .addDecorator(withDocsCustom(baseDocs))
  .add('Base', () => (
    <div>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Line Chart</h6>
              <ELineChart height={180}/>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Bar Chart</h6>
              <EBarChart height={180}/>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Donut Chart</h6>
              <EDonutChart height={180}/>
            </div>
          </div>
        </div>
        </div>
        <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Pie Chart</h6>
              <EPieChart height={180}/>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Radar Chart</h6>
              <ERadarChart height={180}/>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Horizontal Bar</h6>
              <EBarHorizontalChart height={180}/>
            </div>
          </div>
        </div>
        </div>
        <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Mixed Chart</h6>
              <EMixedChart height={180}/>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Area Chart</h6>
              <EAreaChart height={180}/>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Bubble Chart</h6>
              <EBubbleChart height={180}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))

storiesOf('Components/Chart', module)
  .addDecorator(withDocsCustom(lineDocs))
  .add('Line', () => (
    <div className="row">
      <div className="col-md-4">
        <div className="card p-3">
          <ELineChart height={180}/>
        </div>
      </div>
    </div>
  ))

storiesOf('Components/Chart', module)
  .addDecorator(withDocsCustom(areaDocs))
  .add('Area', () => (
    <div className="row">
      <div className="col-md-4">
        <div className="card p-3">
          <EAreaChart height={180}/>
        </div>
      </div>
    </div>
  ))

storiesOf('Components/Chart', module)
  .addDecorator(withDocsCustom(barDocs))
  .add('Bar', () => (
    <div className="row">
      <div className="col-md-4">
        <div className="card p-3">
          <EBarChart height={180}/>
        </div>
      </div>
    </div>
  ))

storiesOf('Components/Chart', module)
  .addDecorator(withDocsCustom(horizontalBarDocs))
  .add('Horizontal Bar', () => (
    <div className="row">
      <div className="col-md-4">
        <div className="card p-3">
          <EBarHorizontalChart height={180}/>
        </div>
      </div>
    </div>
  ))

storiesOf('Components/Chart', module)
  .addDecorator(withDocsCustom(donutDocs))
  .add('Donut', () => (
    <div className="row">
      <div className="col-md-4">
        <div className="card p-3">
          <EDonutChart height={180}/>
        </div>
      </div>
    </div>
  ))

storiesOf('Components/Chart', module)
  .addDecorator(withDocsCustom(pieDocs))
  .add('Pie', () => (
    <div className="row">
      <div className="col-md-4">
        <div className="card p-3">
          <EPieChart height={180}/>
        </div>
      </div>
    </div>
  ))

storiesOf('Components/Chart', module)
  .addDecorator(withDocsCustom(radarDocs))
  .add('Radar', () => (
    <div className="row">
      <div className="col-md-4">
        <div className="card p-3">
          <ERadarChart height={180}/>
        </div>
      </div>
    </div>
  ))

storiesOf('Components/Chart', module)
  .addDecorator(withDocsCustom(bubbleDocs))
  .add('Bubble', () => (
    <div className="row">
      <div className="col-md-4">
        <div className="card p-3">
          <EBubbleChart height={180}/>
        </div>
      </div>
    </div>
  ))

storiesOf('Components/Chart', module)
  .addDecorator(withDocsCustom(mixedDocs))
  .add('Mixed', () => (
    <div className="row">
      <div className="col-md-4">
        <div className="card p-3">
          <EMixedChart height={180}/>
        </div>
      </div>
    </div>
  ))
