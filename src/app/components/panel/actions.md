# Panel `Actions`

A simple content container with some built-in options. Basically, the wrapper on the [Bootstrap - Card](http://getbootstrap.com/docs/4.0/components/card/) component.

<!-- STORY -->

### Usage

```js
import * as React from 'react';
import EPanel from 'elements/panel'
```
```jsx
class EPanelActions extends React.Component {
  render() {
    const Actions = () => (
      <i className="fa fa-fw fa-edit"></i>
    )

    return (
      <EPanel title="Panel Actions" actionsNode={<Actions/>}>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </EPanel>
    )
  }
}

export default EPanelActions
```

### Props

| Name         | Type             | Default | Description |
|--------------|------------------|---------|-------------|
| title        | PropTypes.string | -       | Panel title. |
| subtitle     | PropTypes.string | -       | Panel subtitle. |
| noHead       | PropTypes.bool   | `false` | Flag that removes entire `headNode`. |
| headNode     | PropTypes.node   | node    | The whole custom `.card-title` element that contains `actionsNode` too. |
| titleNode    | PropTypes.node   | node    | Custom content that replaces `title` and `subtitle`. |
| subtitleNode | PropTypes.node   | node    | Custom content that replaces `subtitle`. |
| actionsNode  | PropTypes.node   | `null`  | An optional content to place to the right of panel head. |


### See Also
- [Bootstrap - Card](http://getbootstrap.com/docs/4.0/components/card/)
- [Reactstrap - Card](https://reactstrap.github.io/components/card/)
