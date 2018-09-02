import { computed, action, observable } from 'mobx';
import { lazyObservable, ILazyObservable, fromPromise, IPromiseBasedObservable } from 'mobx-utils';
import { toast } from 'react-toastify';
// import { defaultItemsPerPage } from '../../constants';

interface IEntityApi {
    getAll: (pageNumber?: number, itemsPerPage?: number) => Promise<any>;
    get: (id: string) => Promise<any>;
    create: (data: any) => Promise<any>;
    update: (id: string, data: any) => Promise<any>;
    remove: (id: string) => Promise<any>;
}

// interface IPagingOpts {
//     itemsPerPage: number;
//     pageNumber: number;
// }

// CRUD Abstract Store
export abstract class CRUDStore {
    @observable
    public createResult: IPromiseBasedObservable<any> = null;
    @observable
    public updateResult: IPromiseBasedObservable<any> = null;
    @observable
    public deleteResult: IPromiseBasedObservable<any> = null;

    @observable
    public selectedItemData: any = null;

    // @observable
    // public pagingParams: IPagingOpts = {
    //     itemsPerPage: defaultItemsPerPage,
    //     pageNumber: 1,
    // };

    @observable private privateItemsObservable: ILazyObservable<any> = null;
    private entityApi: IEntityApi = null;

    constructor(entityApi: IEntityApi) {
        this.entityApi = entityApi;
    }

    public setSelectedItemData(itemData) {
        this.selectedItemData = itemData;
    }

    @action.bound
    public createItem(item) {
        // this.createResult = fromPromise(
        this.privateItemsObservable.reset();
        this.entityApi.create(item).then(() => {
            toast.success('Successful create');
            this.privateItemsObservable.refresh();
        });
        // );
    }

    @action.bound
    public updateItem({ id, ...item }) {
        // this.updateResult = fromPromise(
        this.privateItemsObservable.reset();
        this.entityApi.update(id, item).then(() => {
            toast.success('Successful update');
            this.privateItemsObservable.refresh();
        });
        // );
    }

    @action.bound
    public deleteItem(itemId) {
        this.privateItemsObservable.reset();
        this.deleteResult = fromPromise(this.entityApi.remove(itemId)
            .then(() => {
                toast.success('Success');
                this.privateItemsObservable.refresh();
            })
            .catch(() => {
                this.privateItemsObservable.refresh();
            }),
        );
    }

    @action
    public resetCreate() {
        this.createResult = null;
    }

    @action
    public resetUpdate() {
        this.updateResult = null;
        this.selectedItemData = null;
    }

    @action.bound
    public refreshItems() {
        this.privateItemsObservable.reset();
        this.privateItemsObservable.refresh();
    }

    @action
    public setPagingParams(itemsPerPage: number, pageNumber: number) {
        // this.pagingParams = { itemsPerPage, pageNumber };
        this.refreshItems();
    }

    @computed
    public get itemsObservable() {
        if (!this.privateItemsObservable) {
            this.privateItemsObservable = lazyObservable((sink) =>
                this.entityApi.getAll(/* this.pagingParams.itemsPerPage, this.pagingParams.pageNumber */)
                    .then((items) => sink(items))
                    .catch(() => sink([]))
                , null);
        }
        return this.privateItemsObservable;
    }
}

export default CRUDStore;
