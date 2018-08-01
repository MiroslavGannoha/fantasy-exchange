import * as React from 'react';
import * as classNames from 'classnames';
import ETable from '../../components/table';
import * as Moment from 'moment';

interface IUsersTableProps {
    items?: any[];
    selected?: any[];
    page?: number;
    perPage?: number;
    onPageChange?: (page: number, perPage: number) => void;
    onClickEdit?: (row) => void;
    onSelect?: (id: number, selected: boolean) => void;
    onSelectAll?: (e) => void;
    onStatusChange?: (id: number, isCell: boolean) => void;
}

const defaultProps: IUsersTableProps = {
    items: [],
    page: 1,
    perPage: 12,
    selected: [],
};

class UsersTable extends React.Component<IUsersTableProps, {}> {
    public render() {
        const columns = [
            {
                classes: 'align-middle',
                dataField: 'id',
                formatter: (cell, row, index) => {
                    const onCheckboxChange = (e) => this.props.onSelect(cell, e.target.checked);
                    return (
                        <label className="custom-control custom-checkbox custom-control-nameless m-0 align-top">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id={'item-' + cell}
                                checked={row.selected ? true : false}
                                onChange={onCheckboxChange}
                            />
                            <label className="custom-control-label" htmlFor={'item-' + cell} />
                        </label>
                    );
                },
                headerClasses: 'align-top',
                headerFormatter: (column, index) => {
                    const onSelectAll = (e) => this.props.onSelectAll(e.target.checked);
                    return (
                        <label className="custom-control custom-checkbox custom-control-nameless m-0">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="all-items"
                                checked={this.props.items.length === this.props.selected.length}
                                onChange={onSelectAll}
                            />
                            <label className="custom-control-label" htmlFor="all-items" />
                        </label>
                    );
                },
                text: '',
            },
            {
                classes: 'align-middle text-center',
                dataField: 'photo',
                formatter: (cell, row, index) => (
                    <div
                        className="bg-light d-inline-flex justify-content-center align-items-center align-top"
                        style={{ width: '35px', height: '35px', borderRadius: '3px' }}
                    >
                        <i className="fa fa-fw fa-photo" style={{ opacity: 0.8 }} />
                    </div>
                ),
                text: 'Photo',
            },
            {
                classes: 'text-nowrap align-middle',
                dataField: 'name',
                headerClasses: 'max-width',
                text: 'Name',
            },
            {
                classes: 'text-nowrap align-middle',
                dataField: 'date',
                formatter: (cell, row, index) => (
                    <span>{Moment.unix(cell).format('DD MMM YYYY')}</span>
                ),
                sort: true,
                text: 'Date',
            },
            {
                classes: 'text-center align-middle',
                dataField: 'status',
                formatter: (cell, row, index) => {
                    const classes = classNames(
                        'fa fa-fw text-secondary cursor-pointer',
                        cell ? 'fa-toggle-on' : 'fa-toggle-off',
                    );
                    const onStatusChange = () => this.props.onStatusChange(row.id, !cell);
                    return (
                        <i
                            className={classes}
                            onClick={onStatusChange}
                        />
                    );
                },
                text: ' ',
            },
            {
                classes: 'text-center align-middle',
                dataField: '',
                formatter: (cell, row, index) => {
                    const onClickEdit = () => this.props.onClickEdit(row);
                    return (
                        <div className="btn-group align-top">
                            <button
                                className="btn btn-sm btn-outline-secondary badge"
                                type="button"
                                onClick={onClickEdit}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-sm btn-outline-secondary badge"
                                type="button"
                            >
                                <i className="fa fa-trash"/>
                            </button>
                        </div>
                    );
                },
                text: 'Actions',
            },
        ];
        const pagination = {
            onPageChange: this.props.onPageChange,
            page: this.props.page || defaultProps.page,
            sizePerPage: this.props.perPage || defaultProps.perPage,
        };
        return (
            <ETable
                className="table-lg mt-3"
                keyField="id"
                data={this.props.items}
                columns={columns}
                pagination={pagination}
            />
        );
    }
}

export default UsersTable;
