import CRUDStore from '../CRUDStore';
import { usersApi } from '../../api';

export class UsersStore extends CRUDStore {
    constructor() {
        super(usersApi);
    }
}

export default UsersStore;
