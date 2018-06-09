import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocsCustom } from '.storybook/utils/readme'

import ENavlineDefault from 'elements/navline/examples/Default'
import ENavlineArrow from 'elements/navline/examples/Arrow'

import defaultDocs from './README.md'
import arrowDocs from './arrow.md'

storiesOf('Components/Navline', module)
  .addDecorator(withDocsCustom(defaultDocs))
  .add('Default', () => (
    <ENavlineDefault/>
  ))

storiesOf('Components/Navline', module)
  .addDecorator(withDocsCustom(arrowDocs))
  .add('Arrow', () => (
    <ENavlineArrow/>
  ))
