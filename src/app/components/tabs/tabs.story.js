import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocsCustom } from '.storybook/utils/readme'

import ETabsDefault from 'elements/tabs/examples/Default'
import ETabsNested from 'elements/tabs/examples/Nested'

import defaultDocs from './README.md'
import nestedDocs from './nested.md'

storiesOf('Components/Tabs', module)
  .addDecorator(withDocsCustom(defaultDocs))
  .add('Default', () => (
    <ETabsDefault/>
  ))

storiesOf('Components/Tabs', module)
  .addDecorator(withDocsCustom(nestedDocs))
  .add('Nested', () => (
    <ETabsNested/>
  ))
