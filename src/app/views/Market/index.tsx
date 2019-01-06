import * as React from 'react';
import { inject, observer } from 'mobx-react';
import ItemForm from './ItemForm';
import { IStores, MarketStore } from '../../stores';
import CRUDTable from '../../components/CRUDTable';

interface IProps {
    marketStore: MarketStore;
}

@inject(({ marketStore }: IStores) => ({ marketStore }))
@observer
class Market extends React.Component<IProps> {

    public render() {
        console.log(this.props.marketStore.tasks.items);
        const columns = [
            {
                dataField: 'sellerId',
                text: 'Seller',
            },
            {
                dataField: 'playerId',
                text: 'Player',
            },
            {
                dataField: 'volume',
                text: 'Volume',
            },
            {
                dataField: 'startingPrice',
                text: 'Starting Price',
            },
            {
                dataField: 'duration',
                text: 'Duration',
            },
        ];

        const { marketStore } = this.props;

        return (
            <CRUDTable
                CRUDStoreChild={marketStore}
                columns={columns}
                ItemForm={ItemForm}
            />
        );
    }
}

export default Market;
