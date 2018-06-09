import * as React from 'react';
import PropTypes from 'prop-types'
import EPanel from '../index'

const propTypes = {
  className: PropTypes.string
}

class EPanelDefault extends React.Component {
  render() {
    return (
      <EPanel title="Title" subtitle="Subtitle">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card''s content.</p>
      </EPanel>
    )
  }
}

EPanelDefault.propTypes = propTypes

export default EPanelDefault
