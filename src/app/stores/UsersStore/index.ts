import CRUDStore from '../CRUDStore';
import * as usersApi from '../../api/users';

export class UsersStore extends CRUDStore {
    constructor() {
        super(usersApi);
    }
}

export default UsersStore;
