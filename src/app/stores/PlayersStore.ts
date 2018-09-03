import CRUDStore from './CRUDStore';
import { playersApi } from '../api';

export class PlayersStore extends CRUDStore {
    constructor() {
        super(playersApi);
    }
}

export default PlayersStore;
