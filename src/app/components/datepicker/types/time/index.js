import EDatepicker from '../../index'

class EDatepickerTime extends EDatepicker {
  constructor(props) {
    super(props)
    this.localDefaults = {
      enableTime: true,
      noCalendar: true,
      time_24hr: true
    }
  }
}

export default EDatepickerTime
