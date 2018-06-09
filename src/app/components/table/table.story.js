import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocsCustom } from '.storybook/utils/readme'

import BasicTable from 'elements/table/examples/BasicTable'
import AdvancedTable from 'elements/table/examples/advanced-table'

import basicDocs from './README.md'
import advancedDocs from './advanced.md'

storiesOf('Components/Table', module)
  .addDecorator(withDocsCustom(basicDocs))
  .add('Basic', () => (
    <div className="row">
      <div className="col-md-8 col-lg-7 col-xl-5">
        <BasicTable/>
      </div>
    </div>
  ))

storiesOf('Components/Table', module)
  .addDecorator(withDocsCustom(advancedDocs))
  .add('Advanced', () => (
    <div className="row">
      <div className="col-lg-10 col-xl-7">
        <AdvancedTable/>
      </div>
    </div>
  ))
