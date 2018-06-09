import * as React from 'react';
import PropTypes from 'prop-types'
import * as classNames from 'classnames';
import ETabs from '../index'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'

const propTypes = {
  className: PropTypes.string
}

class ETabsNested extends React.Component {
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
      <div className={classNames('card px-3', this.props.className)}>
        <ETabs nested>
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
                className={classNames({ active: this.state.activeTab === 'bookmarks' })}
                onClick={(e) => { this.toggle('bookmarks', e) }} href="">
                Bookmarks
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classNames({ active: this.state.activeTab === 'messages' })}
                onClick={(e) => { this.toggle('messages', e) }} href="">
                Messages
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="home">
              <ul className="nav">
                <li className="nav-item">
                  <a href="" className="nav-link" onClick={(e) => e.preventDefault()}>
                    <span>My Profile</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link" onClick={(e) => e.preventDefault()}>
                    <span>Friends</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link" onClick={(e) => e.preventDefault()}>
                    <span>News</span>
                  </a>
                </li>
              </ul>
            </TabPane>
            <TabPane tabId="bookmarks">
              <ul className="nav">
                <li className="nav-item">
                  <a href="" className="nav-link" onClick={(e) => e.preventDefault()}>
                    <span>Posts</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link" onClick={(e) => e.preventDefault()}>
                    <span>People</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link" onClick={(e) => e.preventDefault()}>
                    <span>Documents</span>
                  </a>
                </li>
              </ul>
            </TabPane>
            <TabPane tabId="messages">
              <ul className="nav">
                <li className="nav-item">
                  <a href="" className="nav-link" onClick={(e) => e.preventDefault()}>
                    <span>Inbox</span>
                    <span className="badge badge-light ml-1">2</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link" onClick={(e) => e.preventDefault()}>
                    <span>Sent</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link" onClick={(e) => e.preventDefault()}>
                    <span>Drafts</span>
                  </a>
                </li>
              </ul>
            </TabPane>
          </TabContent>
        </ETabs>
      </div>
    )
  }
}

ETabsNested.propTypes = propTypes

export default ETabsNested
