import * as React from 'react';
import PropTypes from 'prop-types'
import EPanel from '../index'

const propTypes = {
  className: PropTypes.string
}

class EPanelActions extends React.Component {
  render() {
    const Actions = () => (
      <i className="fa fa-fw fa-edit"></i>
    )

    return (
      <EPanel title="Panel Actions" actionsNode={<Actions/>}>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
      </EPanel>
    )
  }
}

EPanelActions.propTypes = propTypes

export default EPanelActions
