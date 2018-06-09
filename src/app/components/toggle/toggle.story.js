import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocsCustom } from '.storybook/utils/readme'

import EToggleDefault from 'elements/toggle/examples/Default'

import defaultDocs from './README.md'

storiesOf('Components/Toggle', module)
  .addDecorator(withDocsCustom(defaultDocs))
  .add('Default', () => (
    <div className="d-flex">
      <div className="card p-3">
        <EToggleDefault/>
      </div>
    </div>
  ))
