import * as React from 'react';
import Switch from 'react-switch'

const defaultProps = {
  height: 21,
  width: 50,
  handleDiameter: 15,
  onColor: '#59CD90',
  offColor: '#adb5bd',
  activeBoxShadow: null,
  onChange: () => {},
  uncheckedIcon: (
    <div style={{
      height: "100%",
      lineHeight: "21px",
      textAlign: "right",
      fontSize: 10,
      color: "white",
      paddingRight: 10
    }}>Off</div>
  ),
  checkedIcon: (
    <div style={{
      height: "100%",
      lineHeight: "21px",
      textAlign: "left",
      fontSize: 10,
      color: "white",
      paddingLeft: 10
    }}>On</div>
  )
}

class EToggle extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      checked: props.checked
    }
  }

  toggle(checked, e, id) {
    this.setState({
      checked: !this.state.checked
    })
    if (this.onChange) {
      this.onChange(checked, e, id)
    }
  }

  render() {
    const { checked, onChange, ...restProps } = this.props
    return <Switch checked={this.state.checked} onChange={this.toggle} {...restProps}/>
  }
}

EToggle.defaultProps = defaultProps

export default EToggle
