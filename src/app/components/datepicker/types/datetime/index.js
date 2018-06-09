import EDatepicker from '../../index'

class EDatepickerDatetime extends EDatepicker {
  constructor(props) {
    super(props)
    this.localDefaults = {
      dateFormat: 'j M Y H:i',
      enableTime: true,
      time_24hr: true
    }
  }
}

export default EDatepickerDatetime
