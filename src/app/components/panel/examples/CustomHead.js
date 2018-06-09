import * as React from 'react';
import PropTypes from 'prop-types'
import EPanel from '../index'

const propTypes = {
  className: PropTypes.string
}

class EPanelCustomHead extends React.Component {
  render() {
    const Head = () => (
      <div>
        <div className="h6 font-weight-bold text-center">Custom Head</div>
        <hr/>
      </div>
    )

    return (
      <EPanel headNode={<Head/>}>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
      </EPanel>
    )
  }
}

EPanelCustomHead.propTypes = propTypes

export default EPanelCustomHead
