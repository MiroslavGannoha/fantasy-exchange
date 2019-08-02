import * as React from 'react';
import { observer } from 'mobx-react';
// import * as moment from 'moment';
import Form from './Form';
import CRUDTable from '../../components/CRUDTable';
// import { useQuery } from '../../../models';

@observer
class Players extends React.Component {

    public render() {
        const columns = [
            {
                classes: 'align-middle text-center',
                dataField: 'photoUrl',
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
                dataField: 'nickname',
                headerClasses: 'max-width',
                text: 'Nickname',
            },
            {
                classes: 'text-nowrap align-middle',
                dataField: 'playerRole',
                headerClasses: 'max-width',
                text: 'Role',
            },
            {
                classes: 'text-nowrap align-middle',
                dataField: 'countryCode',
                headerClasses: 'max-width',
                text: 'Country',
            },
            // {
            //     classes: 'text-nowrap align-middle',
            //     dataField: 'creationTime',
            //     formatter: (creationTime) => (
            //         <span>{moment(creationTime).format('DD MMM YYYY')}</span>
            //     ),
            //     sort: true,
            //     text: 'Date',
            // },
        ];

    // const { store, error, loading, data } = useQuery((s) => s.queryPlayer());



        return (
            <CRUDTable
                tableName={'Player'}
                columns={columns}
                ItemForm={Form}
            />
        );
    }
}

export default Players;
