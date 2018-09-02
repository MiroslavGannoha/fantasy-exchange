import CRUDStore from './CRUDStore';
import * as usersApi from '../api/users';

export class PlayersStore extends CRUDStore {
    constructor() {
        super(usersApi);
    }
}

export default PlayersStore;
