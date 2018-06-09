import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocsCustom } from '.storybook/utils/readme'

import EPanelDefault from 'elements/panel/examples/Default'
import EPanelActions from 'elements/panel/examples/Actions'
import EPanelCustomHead from 'elements/panel/examples/CustomHead'

import defaultDocs from './README.md'
import actionsDocs from './actions.md'
import customHeadDocs from './custom-head.md'

storiesOf('Components/Panel', module)
  .addDecorator(withDocsCustom(defaultDocs))
  .add('Default', () => (
    <div className="row">
      <div className="col-md-4">
        <EPanelDefault/>
      </div>
    </div>
  ))

storiesOf('Components/Panel', module)
  .addDecorator(withDocsCustom(actionsDocs))
  .add('Actions', () => (
    <div className="row">
      <div className="col-md-4">
        <EPanelActions/>
      </div>
    </div>
  ))

storiesOf('Components/Panel', module)
  .addDecorator(withDocsCustom(customHeadDocs))
  .add('Custom Head', () => (
    <div className="row">
      <div className="col-md-4">
        <EPanelCustomHead/>
      </div>
    </div>
  ))
