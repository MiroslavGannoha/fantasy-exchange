import * as React from 'react';
import PropTypes from 'prop-types'
import ENavlist from '../index'
import { Nav, NavItem, NavLink, UncontrolledTooltip as Tooltip } from 'reactstrap'

const propTypes = {
  className: PropTypes.string
}

const tooltipDelay = {
  show: 0,
  hide: 0
}

class ENavlistActiveBgTooltips extends React.Component {
  render() {
    return (
      <div className="card py-3 px-2">
        <ENavlist activeBg>
          <Nav>
            <NavItem>
              <NavLink className="active" href="" id="nav-home" onClick={(e) => e.preventDefault()}>
                <i className="fa fa-fw fa-home"></i>
                <Tooltip placement="right" target="nav-home" delay={tooltipDelay}>
                  Hello world!
                </Tooltip>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" id="nav-bookmarks" onClick={(e) => e.preventDefault()}>
                <i className="fa fa-fw fa-bookmark"></i>
                <Tooltip placement="right" target="nav-bookmarks" delay={tooltipDelay}>
                  Bookmarks
                </Tooltip>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" id="nav-messages" onClick={(e) => e.preventDefault()}>
                <i className="fa fa-fw fa-envelope"></i>
                <Tooltip placement="right" target="nav-messages" delay={tooltipDelay}>
                  Messages
                </Tooltip>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" id="nav-settings" onClick={(e) => e.preventDefault()}>
                <i className="fa fa-fw fa-cog"></i>
                <Tooltip placement="right" target="nav-settings" delay={tooltipDelay}>
                  Settings
                </Tooltip>
              </NavLink>
            </NavItem>
          </Nav>
        </ENavlist>
      </div>
    );
  }
}

ENavlistActiveBgTooltips.propTypes = propTypes

export default ENavlistActiveBgTooltips
