import * as React from 'react';
import ETable from '../../components/table';
import * as Moment from 'moment';

interface IUsersTableProps {
    items?: any[];
    selected?: any[];
    page?: number;
    perPage?: number;
    onPageChange?: (page: number, perPage: number) => void;
    onClickEdit?: (row) => void;
    onClickDelete?: (id: string) => void;
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
                dataField: 'displayName',
                headerClasses: 'max-width',
                text: 'Name',
            },
            {
                classes: 'text-nowrap align-middle',
                dataField: 'email',
                headerClasses: 'max-width',
                text: 'Email',
            },
            {
                classes: 'text-nowrap align-middle',
                dataField: 'accessLevel',
                headerClasses: 'max-width',
                formatter: (accessLevel) => accessLevel,
                text: 'Access level',
            },
            {
                classes: 'text-nowrap align-middle',
                dataField: 'creationTime',
                formatter: (creationTime) => (
                    <span>{Moment(creationTime).format('DD MMM YYYY')}</span>
                ),
                sort: true,
                text: 'Date',
            },
            {
                classes: 'text-center align-middle',
                dataField: '',
                formatter: (cell, row, index) => {
                    const onClickEdit = () => this.props.onClickEdit(row);
                    const onClickDelete = () => this.props.onClickDelete(row.id);
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
                                onClick={onClickDelete}
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
