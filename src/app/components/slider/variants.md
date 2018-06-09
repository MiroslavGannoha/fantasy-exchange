# Slider `Variants`

Custom slider element based on [rc-slider](https://github.com/react-component/slider) component.

<!-- STORY -->

### Usage
```jsx
import * as React from 'react';
import ESlider from 'elements/slider'

const Variants = () => (
  <div>
    <ESlider variant="primary" value={50}/>
    <ESlider variant="secondary" value={50}/>
    <ESlider variant="info" value={50}/>
    <ESlider variant="success" value={50}/>
    <ESlider variant="warning" value={50}/>
    <ESlider variant="danger" value={50}/>
    <ESlider variant="light" value={50}/>
    <ESlider variant="dark" value={50}/>
  </div>
)
```

### Props

| Name     | Type                                                  | Default |
|----------|-------------------------------------------------------|---------|
| min      | PropTypes.number                                      | `0`     |
| max      | PropTypes.number                                      | `100`   |
| value    | PropTypes.number, PropTypes.arrayOf(PropTypes.number) | `0`     |
| onChange | PropTypes.func                                        | -       |
| variant  | PropTypes.string                                      | -       |

See other props in the [docs](https://github.com/react-component/slider#common-api).

### Dependencies

| Name        | Install    |
|-------------|---------|
| [rc-slider](https://github.com/react-component/slider) | `npm install rc-slider --save` |

### See Also
- [rc-slider](https://github.com/react-component/slider)
