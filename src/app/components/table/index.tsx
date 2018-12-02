import * as React from 'react';
import * as classNames from 'classnames';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import './table.css';
import { Loader } from '../Loader';

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
    isDataLoading: boolean;
}

// const defaultProps = {
//     noDataIndication: () => (
//         <span>There are no records to show</span>
//     ),
//     perPage: 5,
// };

class ETable extends React.Component<IETableProps, {}> {
    public render() {
        const { pagination, className, isDataLoading, ...restProps } = this.props;
        const paginationOptions = {...defaultPagination, ...pagination};
        const noDataIndication = () => isDataLoading ? <Loader /> : 'Data Not Available';
        return (
            <div className={classNames('table-responsive', className)}>
                <BootstrapTable
                    noDataIndication={noDataIndication}
                    pagination={paginationFactory(paginationOptions)}
                    {...restProps}
                />
            </div>
        );
    }
}

export default ETable;
