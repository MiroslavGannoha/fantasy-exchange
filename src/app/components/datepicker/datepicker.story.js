import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocsCustom } from '.storybook/utils/readme'

import EDatepickerDate from 'elements/datepicker/examples/Date'
import EDatepickerDatetime from 'elements/datepicker/examples/Datetime'
import EDatepickerInline from 'elements/datepicker/examples/Inline'
import EDatepickerTime from 'elements/datepicker/examples/Time'
import EDatepickerRange from 'elements/datepicker/examples/Range'
import EDatepickerAddons from 'elements/datepicker/examples/Addons'

import dateDocs from './README.md'
import inlineDocs from './types/inline/README.md'
import datetimeDocs from './types/datetime/README.md'
import timeDocs from './types/time/README.md'
import rangeDocs from './types/range/README.md'
import addonsDocs from './types/addons/README.md'

storiesOf('Components/Datepicker', module)
  .addDecorator(withDocsCustom(dateDocs))
  .add('Date', () => (
    <div className="row">
      <div className="col-md-4 col-lg-3">
        <div className="card p-3">
          <EDatepickerDate/>
        </div>
      </div>
    </div>
  ))

storiesOf('Components/Datepicker', module)
  .addDecorator(withDocsCustom(datetimeDocs))
  .add('Datetime', () => (
    <div className="row">
      <div className="col-md-4 col-lg-3">
        <div className="card p-3">
          <EDatepickerDatetime/>
        </div>
      </div>
    </div>
  ))

storiesOf('Components/Datepicker', module)
  .addDecorator(withDocsCustom(timeDocs))
  .add('Time', () => (
    <div className="row">
      <div className="col-md-4 col-lg-3">
        <div className="card p-3">
          <EDatepickerTime/>
        </div>
      </div>
    </div>
  ))

storiesOf('Components/Datepicker', module)
  .addDecorator(withDocsCustom(rangeDocs))
  .add('Range', () => (
    <div className="row">
      <div className="col-md-4 col-lg-3">
        <div className="card p-3">
          <EDatepickerRange/>
        </div>
      </div>
    </div>
  ))

storiesOf('Components/Datepicker', module)
  .addDecorator(withDocsCustom(inlineDocs))
  .add('Inline', () => (
    <div className="d-flex">
      <div className="card p-1">
        <EDatepickerInline/>
      </div>
    </div>
  ))

storiesOf('Components/Datepicker', module)
  .addDecorator(withDocsCustom(addonsDocs))
  .add('Addons', () => (
    <div className="row">
      <div className="col-md-4 col-lg-3">
        <div className="card p-3">
          <EDatepickerAddons/>
        </div>
      </div>
    </div>
  ))
