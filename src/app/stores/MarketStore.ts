import CRUDStore from './CRUDStore';
import { offersApi } from '../api';

export class MarketStore extends CRUDStore {
    constructor() {
        super(offersApi);
    }
}

export default MarketStore;
