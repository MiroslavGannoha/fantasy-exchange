import * as React from 'react';
import * as classNames from 'classnames';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import './table.css';

const defaultPagination = {
    alwaysShowAllBtns: true,
    firstPageText: '«',
    hideSizePerPage: true,
    lastPageText: '»',
    nextPageText: '›',
    prePageText: '‹',
    sizePerPage: 5,
};

interface IETableProps {
    perPage?: number;
    className?: string;
    pagination?: any;
    keyField: string;
    data: any;
    columns: any;
}

// const defaultProps = {
//     noDataIndication: () => (
//         <span>There are no records to show</span>
//     ),
//     perPage: 5,
// };

class ETable extends React.Component<IETableProps, {}> {
    public render() {
        const { pagination, className, ...restProps } = this.props;
        const paginationOptions = {...defaultPagination, ...pagination};

        return (
            <div className={classNames('table-responsive', className)}>
                <BootstrapTable
                    pagination={paginationFactory(paginationOptions)}
                    {...restProps}
                />
            </div>
        );
    }
}

export default ETable;
