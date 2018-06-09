import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocsCustom } from '.storybook/utils/readme'

import ENavlistDefault from 'elements/navlist/examples/Default'
import ENavlistActiveBg from 'elements/navlist/examples/ActiveBg'
import ENavlistActiveBgTooltips from 'elements/navlist/examples/ActiveBgTooltips'
import ENavlistActiveBold from 'elements/navlist/examples/ActiveBold'

import defaultDocs from './README.md'
import activeBgDocs from './active-bg.md'
import activeBoldDocs from './active-bold.md'

storiesOf('Components/Navlist', module)
  .addDecorator(withDocsCustom(defaultDocs))
  .add('Default', () => (
    <div style={{maxWidth: '175px'}}>
      <ENavlistDefault/>
    </div>
  ))

storiesOf('Components/Navlist', module)
  .addDecorator(withDocsCustom(activeBgDocs))
  .add('Active Background', () => {
    return (
      <div className="d-flex justify-content-between" style={{maxWidth: '265px'}}>
        <div style={{flexGrow: 1}}>
          <ENavlistActiveBg/>
        </div>
        <div className="ml-3">
          <ENavlistActiveBgTooltips/>
        </div>
      </div>
    )
  })

storiesOf('Components/Navlist', module)
  .addDecorator(withDocsCustom(activeBoldDocs))
  .add('Active Bold', () => (
    <div style={{maxWidth: '175px'}}>
      <ENavlistActiveBold/>
    </div>
  ))
