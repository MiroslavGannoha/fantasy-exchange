import * as React from 'react';
import * as classNames from 'classnames';
import Flatpickr from 'react-flatpickr';
// tslint:disable-next-line:no-submodule-imports
import Locale from 'flatpickr/dist/l10n/default';
// tslint:disable-next-line:no-submodule-imports
import 'flatpickr/dist/flatpickr.css';
import './datepicker.css';

const globalDefaults = {
    disableMobile: true,
    locale: {
        ...{},
        ...Locale,
        ...{
            rangeSeparator: ' - ',
            weekdays: {
                shorthand: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            },
        },
    },
};

const isValidDatesArray = (dates) => {
    if (dates instanceof Array) {
        for (const i of dates) {
            if (!isValidDateValue(dates[i])) {
                return false;
            }
        }
        return true;
    }
    return false;
};

const isValidDateValue = (date) => (date instanceof Date) && !isNaN(date.valueOf());

const isEqualDatesArrays = (a, b) => {
    if (a instanceof Array && b instanceof Array) {
        if (a.length !== b.length) {
            return false;
        }
        a.forEach((date, i) => {
            if ((date.valueOf() !== b[i].valueOf())) {
                return false;
            }
        });
        return true;
    }
    return false;
};

const toArray = (value) => {
    if (!value) {
        return [];
    }
    if (!(value instanceof Array)) {
        return [value];
    }
    return value.slice();
};

interface IEDatepickerProps {
    config?: object;
    value: Date | Date[];
    placeholder: string;
    onChange: (dates) => void;
    className?: string;
}

interface IEDatepickerState {
    dates: Date | Date[];
}

// const defaultProps = {
//     config: {},
//     value: [],
// };

class EDatepicker extends React.Component<IEDatepickerProps, IEDatepickerState> {
    public localDefaults: any = {};
    private options: any = {};
    constructor(props) {
        super(props);

        this.state = {
            dates: [],
        };
        this.handleDateChange = this.handleDateChange.bind(this);
        this.getOptions = this.getOptions.bind(this);
    }

    public componentWillMount() {
        this.handleDateChange(toArray(this.props.value));
        this.options = this.getOptions(this.props.config);
    }

    public componentWillReceiveProps(nextProps) {
        this.handleDateChange(toArray(nextProps.value));
        this.options = this.getOptions(nextProps.config);
    }

    public handleDateChange(value) {
        const dates = value.slice();
        if (isValidDatesArray(dates)) {
            if (!isEqualDatesArrays(dates, this.state.dates)) {
                this.setState({
                    dates,
                });

                if (this.props.onChange) {
                    this.props.onChange(dates);
                }
            }
        }
    }

    public getOptions(config) {
        return {
            ...globalDefaults,
            ...this.localDefaults,
            ...config,
        };
    }

    public render() {
        const {
            className,
            config, value, placeholder, onChange,
            // @ts-ignore
            ...attributes,
        } = this.props;

        const datepickerClass = classNames(
            { 'form-control': true },
            className,
        );

        return (
            <Flatpickr
                className={datepickerClass}
                value={this.state.dates}
                options={this.options}
                placeholder={this.props.placeholder}
                onChange={this.handleDateChange}
                {...attributes}
            />
        );
    }
}

export default EDatepicker;
