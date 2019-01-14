import CRUDStore from './CRUDStore';
import { ListPlayersQueryVariables, ListPlayersQuery, UpdatePlayerInput, UpdatePlayerMutation } from 'API';
import { queryCall, mutateCall } from '../../graphql/utils';
import { listPlayers } from '../../graphql/queries';
import { MobxApolloQuery } from 'mobx-apollo';
import { updatePlayer } from '../../graphql/mutations';
import { FetchResult } from 'apollo-link';

export class UsersStore extends CRUDStore {
    public getAllResult: MobxApolloQuery<ListPlayersQuery> = null;
    public updateResult: Promise<FetchResult<UpdatePlayerMutation>> = null;

    public getAll: (vars?: ListPlayersQueryVariables) => MobxApolloQuery<ListPlayersQuery> =
        () => this.getAllResult = queryCall(listPlayers)

    public update: (input?: UpdatePlayerInput) => Promise<FetchResult<UpdatePlayerMutation>> =
        (input) => this.updateResult = mutateCall(updatePlayer, input, [{ query: listPlayers }])
}

export default UsersStore;
