import CRUDStore from './CRUDStore';
import { rightsApi } from '../api';
import UsersStore from './UsersStore';

export class RightsStore extends CRUDStore {
    private usersStore: UsersStore = new UsersStore();
    constructor() {
        super(rightsApi);
    }

    public populateItemsFields = (item: any) => {
        item.holder = {};
        if (item.holderId) {
            const result = this.usersStore.getItemTransformer(item.holderId);

            if (result.state === 'fulfilled') {
                item.holder = result.value;
            }
        }

        return item;
    }
}

export default RightsStore;
