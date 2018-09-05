import CRUDStore from './CRUDStore';
import { rightsApi } from '../api';

export class RightsStore extends CRUDStore {
    constructor() {
        super(rightsApi);
    }
}

export default RightsStore;
