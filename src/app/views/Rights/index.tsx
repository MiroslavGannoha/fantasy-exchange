import * as React from 'react';
import { inject, observer } from 'mobx-react';
// import * as moment from 'moment';

// import { Collection } from 'firestorter';
import ItemForm from './ItemForm';
import { IStores, RightsStore } from '../../stores';
import CRUDTable from '../../components/CRUDTable';

interface IProps {
    rightsStore: RightsStore;
}

@inject(({ rightsStore }: IStores) => ({ rightsStore }))
@observer
class Players extends React.Component<IProps> {

    public render() {
        const columns = [
            {
                classes: 'text-nowrap align-middle',
                dataField: 'name',
                headerClasses: 'max-width',
                text: 'Player',
            },
            {
                classes: 'text-nowrap align-middle',
                dataField: 'nickname',
                headerClasses: 'max-width',
                text: 'Holder',
            },
            {
                classes: 'text-nowrap align-middle',
                dataField: 'playerRole',
                headerClasses: 'max-width',
                text: 'Volume',
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

        const { rightsStore } = this.props;

        return (
            <CRUDTable
                CRUDStore={rightsStore}
                columns={columns}
                ItemForm={ItemForm}
            />
        );
    }
}

export default Players;
