import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocsCustom } from '.storybook/utils/readme'

import ENavbarDefault from 'elements/navbar/examples/Default'
import ENavbarNavCenter from 'elements/navbar/examples/NavInCenter'
import ENavbarBrandCenter from 'elements/navbar/examples/BrandInCenter'

import defaultDocs from './README.md'
import navCenterDocs from './nav-in-center.md'
import brandCenterDocs from './brand-in-center.md'

storiesOf('Components/Navbar', module)
  .addDecorator(withDocsCustom(defaultDocs))
  .add('Default', () => (
    <ENavbarDefault/>
  ))

storiesOf('Components/Navbar', module)
  .addDecorator(withDocsCustom(navCenterDocs))
  .add('Nav in the Center', () => (
    <ENavbarNavCenter/>
  ))

storiesOf('Components/Navbar', module)
  .addDecorator(withDocsCustom(brandCenterDocs))
  .add('Brand in the Center', () => (
    <ENavbarBrandCenter/>
  ))
