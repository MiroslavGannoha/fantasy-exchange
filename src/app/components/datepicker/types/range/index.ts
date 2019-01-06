import EDatepicker from '../../index';

class EDatepickerRange extends EDatepicker {

    public localDefaults = {
        mode: 'range',
        dateFormat: 'd M y',
    };

    constructor(props) {
        super(props);
    }
}

export default EDatepickerRange;
