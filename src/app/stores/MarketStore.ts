import CRUDStore from './CRUDStore';

// import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import { computed } from 'mobx';
import { allTasks, listPlayers } from '../../graphql/queries';
import { queryCall, mutateCall } from '../../graphql/utils';
import { ListPlayersQueryVariables, ListPlayersQuery, UpdatePlayerMutation, UpdatePlayerInput } from 'API';
import { MobxApolloQuery } from 'mobx-apollo';
import { updatePlayer } from '../../graphql/mutations';
import { FetchResult } from 'apollo-link';

export class MarketStore extends CRUDStore {
    public getAllResult: MobxApolloQuery<ListPlayersQuery> = null;
    public updateResult: Promise<FetchResult<UpdatePlayerMutation>> = null;

    public getAll: (vars?: ListPlayersQueryVariables) => MobxApolloQuery<ListPlayersQuery> =
        () => this.getAllResult = queryCall(listPlayers)

    public update: (input?: UpdatePlayerInput) => Promise<FetchResult<UpdatePlayerMutation>> =
        (input) => this.updateResult = mutateCall(updatePlayer, input, [{ query: listPlayers }])

    @computed
    get allTasks() {
        console.log('result', queryCall(allTasks));
        return queryCall(allTasks);
    }

    @computed
    get tasks() {
        return (this.allTasks.data && this.allTasks.data.allTasks) || [];
    }
}

export default MarketStore;
