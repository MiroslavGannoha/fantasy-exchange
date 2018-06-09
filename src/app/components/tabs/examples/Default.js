import * as React from 'react';
import PropTypes from 'prop-types'
import * as classNames from 'classnames';
import ETabs from '../index'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'

const propTypes = {
  className: PropTypes.string
}

class ETabsDefault extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 'home'
    }
  }

  toggle(tab, e) {
    e.preventDefault()
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className={classNames('card', this.props.className)}>
        <div className="card-body pt-2">
          <ETabs>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classNames({ active: this.state.activeTab === 'home' })}
                  onClick={(e) => { this.toggle('home', e) }} href="">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classNames({ active: this.state.activeTab === 'settings' })}
                  onClick={(e) => { this.toggle('settings', e) }} href="">
                  Settings
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classNames({ active: this.state.activeTab === 'inbox' })}
                  onClick={(e) => { this.toggle('inbox', e) }} href="">
                  Inbox <span className="badge badge-light ml-1">2</span>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="home"></TabPane>
              <TabPane tabId="inbox"></TabPane>
              <TabPane tabId="settings"></TabPane>
            </TabContent>
          </ETabs>
        </div>
      </div>
    )
  }
}

ETabsDefault.propTypes = propTypes

export default ETabsDefault
