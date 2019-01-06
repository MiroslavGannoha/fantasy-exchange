import CRUDStore from './CRUDStore';
import { offersApi } from '../api';

// import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import { computed } from 'mobx';
import { allTasks } from '../../graphql/queries';
import { queryCall } from 'app/api/utils';

export class MarketStore extends CRUDStore {
    constructor() {
        super(offersApi);
    }

    @computed
    get allTasks() {
        return queryCall(allTasks);
    }

    @computed
    get tasks() {
        return (this.allTasks.data && this.allTasks.data.allTasks) || [];
    }
}

export default MarketStore;
