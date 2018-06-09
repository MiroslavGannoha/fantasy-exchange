import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocsCustom } from '.storybook/utils/readme'

import ESlider from 'elements/slider'
import ESliderSingle from 'elements/slider/examples/Single'
import ESliderDouble from 'elements/slider/examples/Double'

import singleDocs from './README.md'
import doubleDocs from './double.md'
import variantsDocs from './variants.md'

storiesOf('Components/Slider', module)
  .addDecorator(withDocsCustom(singleDocs))
  .add('Single', () => (
    <div className="row">
      <div className="col-md-4">
        <div className="card p-3">
          <ESliderSingle/>
        </div>
      </div>
    </div>
  ))

storiesOf('Components/Slider', module)
  .addDecorator(withDocsCustom(doubleDocs))
  .add('Double', () => (
    <div className="row">
      <div className="col-md-4">
        <div className="card p-3">
          <ESliderDouble/>
        </div>
      </div>
    </div>
  ))

storiesOf('Components/Slider', module)
  .addDecorator(withDocsCustom(variantsDocs))
  .add('Variants', () => (
    <div className="row w-100">
      <div className="col-md-3 mb-3">
        <div className="card p-2">
          <ESlider variant="primary" value={50}/>
        </div>
      </div>
      <div className="col-md-3 mb-3">
        <div className="card p-2">
          <ESlider variant="secondary" value={50}/>
        </div>
      </div>
      <div className="col-md-3 mb-3">
        <div className="card p-2">
          <ESlider variant="success" value={50}/>
        </div>
      </div>
      <div className="col-md-3 mb-3">
        <div className="card p-2">
          <ESlider variant="info" value={50}/>
        </div>
      </div>
      <div className="col-md-3 mb-3 mb-md-0">
        <div className="card p-2">
          <ESlider variant="warning" value={50}/>
        </div>
      </div>
      <div className="col-md-3 mb-3 mb-md-0">
        <div className="card p-2">
          <ESlider variant="danger" value={50}/>
        </div>
      </div>
      <div className="col-md-3 mb-3 mb-md-0">
        <div className="card p-2">
          <ESlider variant="light" value={50}/>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card p-2">
          <ESlider variant="dark" value={50}/>
        </div>
      </div>
    </div>
  ))
