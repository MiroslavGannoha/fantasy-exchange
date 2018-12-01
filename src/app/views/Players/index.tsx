import * as React from 'react';
import { inject, observer } from 'mobx-react';
// import * as moment from 'moment';
import ItemForm from './ItemForm';
import { IStores, PlayersStore } from '../../stores';
import CRUDTable from '../../components/CRUDTable';

interface IProps {
    playersStore: PlayersStore;
}

@inject(({ playersStore }: IStores) => ({ playersStore }))
@observer
class Players extends React.Component<IProps> {

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

        const { playersStore } = this.props;

        return (
            <CRUDTable
                CRUDStoreChild={playersStore}
                columns={columns}
                ItemForm={ItemForm}
            />
        );
    }
}

export default Players;
