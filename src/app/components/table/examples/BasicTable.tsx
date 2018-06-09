import * as React from 'react';
import * as classNames from 'classnames';
import * as Moment from 'moment';
import ETable from '../index';
import EPanel from '../../panel';

interface IBasicTableState {
    page: number;
    perPage: number;
}

class BasicTable extends React.Component<{}, IBasicTableState> {
    constructor(props) {
        super(props);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.state = {
            page: 1,
            perPage: 3,
        };
    }

    public render() {
        const TableStatus = () => {
            const itemsTotal = items.length;
            const itemsFrom = (this.state.perPage * (this.state.page - 1)) + 1;
            const itemsTo = Math.min(itemsFrom + this.state.perPage - 1, itemsTotal);
            return <small className="text-muted">{`${itemsFrom} - ${itemsTo} of ${itemsTotal}`}</small>;
        };

        const columns = [
            {
                classes: 'text-center',
                dataField: '',
                formatter: (cell, row, index) => (
                    <b>{(this.state.perPage * (this.state.page - 1)) + index + 1}</b>
                ),
                headerClasses: 'text-center',
                text: '#',
            },
            {
                classes: 'text-nowrap',
                dataField: 'name',
                headerClasses: 'max-width',
                text: 'Name',
            },
            {
                classes: 'text-nowrap',
                dataField: 'date',
                formatter: (cell, row, index) => (
                    <span>{Moment.unix(cell).format('DD MMM YYYY')}</span>
                ),
                sort: true,
                text: 'Date',
            },
            {
                classes: 'text-center',
                dataField: 'status',
                formatter: (cell, row, index) => (
                    <span className={classNames('badge', cell ? 'badge-light' : 'badge-secondary')}>
                        {String(cell)}
                    </span>
                ),
                text: 'Status',
            },
        ];

        const pagination = {
            onPageChange: this.handlePageChange,
            page: this.state.page,
            sizePerPage: this.state.perPage,
        };

        return (
            <EPanel title="New Users" subtitle="For the week" actionsNode={<TableStatus />}>
                <div className="mt-3">
                    <ETable
                        keyField="name"
                        data={items}
                        columns={columns}
                        pagination={pagination}
                    />
                </div>
            </EPanel>
        );
    }

    private handlePageChange(page, perPage) {
        if (page !== this.state.page || perPage !== this.state.perPage) {
            this.setState({
                page,
                perPage,
            });
        }
    }
}

const items = [
    { name: 'Adam Cotter', date: 1512792908, status: true },
    { name: 'Pauline Noble', date: 1516977768, status: false },
    { name: 'Sherilyn Metzel', date: 1517042476, status: true },
    { name: 'Terrie Boaler', date: 1516439865, status: true },
    { name: 'Rutter Pude', date: 1515850922, status: false },
    { name: 'Clifford Benjamin', date: 1516898701, status: true },
    { name: 'Thedric Romans', date: 1515707885, status: false },
    { name: 'Haily Carthew', date: 1517056707, status: true },
    { name: 'Dorothea Joicey', date: 1513090469, status: true },
    { name: 'Mikaela Pinel', date: 1512892304, status: false },
    { name: 'Donnell Farries', date: 1512299369, status: true },
    { name: 'Letizia Puncher', date: 1512769349, status: false },
    { name: 'Kania Yallowley', date: 1515521487, status: true },
    { name: 'Clay De Francesco', date: 1515012234, status: false },
    { name: 'Ina Queree', date: 1514458367, status: false },
    { name: 'Rasia Awty', date: 1516943842, status: false },
    { name: 'Basil Crosham', date: 1512108299, status: true },
    { name: 'Alexis Dodworth', date: 1516814115, status: false },
    { name: 'Greg Onyon', date: 1517071308, status: true },
    { name: 'Barry Carbett', date: 1515450742, status: true },
    { name: 'Carlyle Adran', date: 1512498261, status: true },
    { name: 'Guillaume Petel', date: 1512742913, status: false },
    { name: 'Wendeline Glasner', date: 1513319267, status: false },
    { name: 'Sylvia Petrollo', date: 1516080489, status: false },
    { name: 'Meade Quoit', date: 1513972299, status: true },
    { name: 'Eugine Planke', date: 1515488407, status: false },
    { name: 'Thoma Drakeley', date: 1515023660, status: false },
    { name: 'Web Margetson', date: 1513557231, status: true },
    { name: 'Erskine Stivens', date: 1515233788, status: true },
    { name: 'Jedidiah Emmer', date: 1512614842, status: false },
    { name: 'Wolfie Drakers', date: 1512381522, status: false },
    { name: 'Allie Quiney', date: 1515488202, status: true },
];

export default BasicTable;
