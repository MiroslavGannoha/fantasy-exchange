import * as React from 'react';
import * as classNames from 'classnames';
import * as Moment from 'moment';
import ENavlist from '../../components/navlist';
import EDatepickerRange from '../../components/datepicker/types/range';

interface IUsersFilterProps {
    items: any[];
    filters: any;
    tabs: object;
    tab: string;
    onFilterChange: (type: string, value) => void;
    onTabClick: (tab, e) => void;
    onClickCreate: () => void;
}
// const defaultProps = {
//     items: [],
//     filters: {},
//     tabs: {},
//     tab: ''
// }

class UsersFilter extends React.Component<IUsersFilterProps, {}> {
    public render() {
        const datesInputPlaceholder = function() {
            let placeholder = '';
            if (!this.props.filters.date || !this.props.filters.date.length) {
                const range = getMinMaxDates(this.props.items);
                if (range.every((date) => Moment(date).isValid())) {
                    placeholder = `${Moment(range[0]).format('DD MMM YY')} - ${Moment(range[1]).format('DD MMM YY')}`;
                }
            }
            return placeholder;
        }.bind(this)();

        const navigation = Object.keys(this.props.tabs).map((tab, index) => {
            const onNavClick = (e) => this.props.onTabClick(tab, e);
            return (
                <li className={classNames('nav-item', { active: this.props.tab === tab })} key={index}>
                    <a href="" className="nav-link" onClick={onNavClick}>
                        <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>&nbsp;
                        <small>/&nbsp;{this.props.tabs[tab].length}</small>
                    </a>
                </li>
            );
        });

        const onFilterChange = (type: string, value) => () => this.props.onFilterChange(type, value);
        const onDateChange = (value) => this.props.onFilterChange('date', value);
        const onNameChange = (e) => this.props.onFilterChange('name', e.target.value);
        // const onStatusChangeFalse = (e) => this.props.onFilterChange('status', false);
        // const onStatusChangeTrue = (e) => this.props.onFilterChange('status', true);
        // const onStatusChangeNull = (e) => this.props.onFilterChange('status', null);

        return (
            <div className="card">
                <div className="card-body">
                    <div className="text-center px-xl-3">
                        <button className="btn btn-success btn-block" type="button" onClick={this.props.onClickCreate}>
                            New User
                        </button>
                    </div>
                    <hr className="my-3" />
                    <ENavlist activeBold={true}>
                        <ul className="nav">
                            {navigation}
                        </ul>
                    </ENavlist>
                    <hr className="my-3" />
                    <div>
                        <div className="form-group">
                            <label>Date from - to:</label>
                            <div>
                                <EDatepickerRange
                                    value={this.props.filters.date}
                                    onChange={onDateChange}
                                    placeholder={datesInputPlaceholder}
                                    config={{}}
                                    className=""
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Search by Name:</label>
                            <div>
                                <input
                                    className="form-control w-100"
                                    type="text"
                                    value={this.props.filters.name}
                                    onChange={onNameChange}
                                    placeholder="Name"
                                />
                            </div>
                        </div>
                    </div>
                    <hr className="my-3" />
                    <div className="">
                        <label>Status:</label>
                        <div className="px-2">
                            <div className="custom-control custom-radio">
                                <input
                                    type="radio"
                                    className="custom-control-input"
                                    name="user-status"
                                    checked={this.props.filters.status === false}
                                    onChange={onFilterChange('status', false)}
                                    id="users-status-disabled"
                                />
                                <label className="custom-control-label" htmlFor="users-status-disabled">Disabled</label>
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="custom-control custom-radio">
                                <input
                                    type="radio"
                                    className="custom-control-input"
                                    name="user-status"
                                    checked={this.props.filters.status === true}
                                    onChange={onFilterChange('status', true)}
                                    id="users-status-active"
                                />
                                <label className="custom-control-label" htmlFor="users-status-active">Active</label>
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="custom-control custom-radio">
                                <input
                                    type="radio"
                                    className="custom-control-input"
                                    name="user-status"
                                    checked={this.props.filters.status === null}
                                    onChange={onFilterChange('status', null)}
                                    id="users-status-any"
                                />
                                <label className="custom-control-label" htmlFor="users-status-any">Any</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function getMinMaxDates(items) {
    let min = Number.POSITIVE_INFINITY;
    let max = 0;
    items.forEach((item) => {
        if (item.date < min) {
            min = item.date;
        }
        if (item.date > max) {
            max = item.date;
        }
    });
    return [Moment.unix(min).toDate(), Moment.unix(max).toDate()];
}

export default UsersFilter;
