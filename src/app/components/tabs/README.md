# Tabs

Redesigned Bootstrap's [Tabs](http://getbootstrap.com/docs/4.0/components/navs/#tabs) component.

<!-- STORY -->

### Usage

```js
import * as React from 'react';
import * as classNames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import ETabs from 'elements/tabs'
```
```jsx
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
      <div className="card">
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

export default ETabsDefault
```

### Props

| Name     | Type           | Default | Description |
|----------|----------------|---------|-------------|
| nested   | PropTypes.bool | `false` | Flag that apply styles for nested tabs. |
| children | PropTypes.node | `null`  | Bootstrap tabs. |


### See Also
- [Bootstrap - Tabs](http://getbootstrap.com/docs/4.0/components/navs/#tabs)
- [Reactstrap - Tabs](https://reactstrap.github.io/components/tabs/)
