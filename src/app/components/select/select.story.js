import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocsCustom } from '.storybook/utils/readme'

import ESelectSingle from 'elements/select/examples/Single'
import ESelectMultiple from 'elements/select/examples/Multiple'

import singleDocs from './README.md'
import multipleDocs from './multiple.md'

storiesOf('Components/Select', module)
  .addDecorator(withDocsCustom(singleDocs))
  .add('Single', () => (
    <div className="row">
      <div className="col-md-4 col-xl-3">
        <ESelectSingle/>
      </div>
    </div>
  ))

storiesOf('Components/Select', module)
  .addDecorator(withDocsCustom(multipleDocs))
  .add('Multiple \\ Tags', () => (
    <div className="row">
      <div className="col-md-4 col-xl-3">
        <ESelectMultiple/>
      </div>
    </div>
  ))
