import { action, observable } from 'mobx';

// CRUD Abstract Store
export abstract class CRUDStore {
    @observable
    public selectedItemData: any = null;

    @action
    public setSelectedItemData(itemData) {
        this.selectedItemData = itemData;
    }

    @action
    public resetSelectedItem() {
        this.selectedItemData = null;
    }
}

export default CRUDStore;
