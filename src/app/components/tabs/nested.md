# Tabs `nested`

A variant of the [Tabs](/?selectedKind=Components/Tabs&selectedStory=Default) component with nested sub-navigation.

<!-- STORY -->

### Usage

```js
import * as React from 'react';
import * as classNames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import ETabs from 'elements/tabs'
```
```jsx
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
      <div className="card px-3">
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
                  <a href="" className="nav-link">
                    <span>My Profile</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <span>Friends</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <span>News</span>
                  </a>
                </li>
              </ul>
            </TabPane>
            <TabPane tabId="bookmarks">
              <ul className="nav">
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <span>Posts</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <span>People</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <span>Documents</span>
                  </a>
                </li>
              </ul>
            </TabPane>
            <TabPane tabId="messages">
              <ul className="nav">
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <span>Inbox</span>
                    <span className="badge badge-light ml-1">2</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <span>Sent</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
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

export default ETabsNested
```

### Props

| Name     | Type           | Default | Description |
|----------|----------------|---------|-------------|
| nested   | PropTypes.bool | `false` | Flag that apply styles for nested tabs. |
| children | PropTypes.node | `null`  | Bootstrap tabs. |


### See Also
- [Bootstrap - Tabs](http://getbootstrap.com/docs/4.0/components/navs/#tabs)
- [Reactstrap - Tabs](https://reactstrap.github.io/components/tabs/)
