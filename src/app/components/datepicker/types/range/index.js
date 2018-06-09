import EDatepicker from '../../index'

class EDatepickerRange extends EDatepicker {
  constructor(props) {
    super(props)
    this.localDefaults = {
      mode: 'range',
      dateFormat: 'd M y',
    }
  }
}

export default EDatepickerRange
