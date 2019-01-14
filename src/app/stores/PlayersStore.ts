import CRUDStore from './CRUDStore';
import { ListPlayersQueryVariables, ListPlayersQuery, UpdatePlayerMutation, UpdatePlayerInput } from 'API';
import { queryCall, mutateCall } from '../../graphql/utils';
import { listPlayers } from '../../graphql/queries';
import { MobxApolloQuery } from 'mobx-apollo';
import { updatePlayer } from '../../graphql/mutations';
import { FetchResult } from 'apollo-link';
// import playersQueries from '../../graphql/queries/players';

export class PlayersStore extends CRUDStore {
    public getAllResult: MobxApolloQuery<ListPlayersQuery> = null;
    public updateResult: Promise<FetchResult<UpdatePlayerMutation>>  = null;

    public getAll: (vars?: ListPlayersQueryVariables) => MobxApolloQuery<ListPlayersQuery> =
        () => this.getAllResult = queryCall(listPlayers)

    public update: (input?: UpdatePlayerInput) => Promise<FetchResult<UpdatePlayerMutation>> =
        (input) => this.updateResult = mutateCall(updatePlayer, input)
}

export default PlayersStore;
