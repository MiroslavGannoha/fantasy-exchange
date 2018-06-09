# Metric

A tiny component for displaying single values of the important parameters.

<!-- STORY -->

### Usage

```js
import EMetric from 'elements/metric'
```
```jsx
<EMetric title="Users" value="3,200" icon="fa-user"/>
<EMetric title="Income" value="8,400" icon="fa-usd" icon-dark/>
```

### Props

| Name      | Type             | Default      |
|-----------|------------------|--------------|
| title     | PropTypes.string | `'Metric'`   |
| value     | PropTypes.string | `'0'`        |
| icon      | PropTypes.string | -            |
| darkIcon  | PropTypes.bool   | `false`      |
| children  | PropTypes.node   | -            |
