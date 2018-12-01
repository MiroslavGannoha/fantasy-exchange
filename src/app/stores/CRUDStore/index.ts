import { computed, action, observable } from 'mobx';
import { lazyObservable, ILazyObservable, fromPromise, IPromiseBasedObservable, createTransformer } from 'mobx-utils';
import { toast } from 'react-toastify';
// import { itemsWithState, IItemsWithState } from './Utils';
// import { defaultItemsPerPage } from '../constants';
import { CRUDAPI } from '../../api/utils';
import { itemsWithState, IItemsWithState } from '../utils/methodsDecorators';

// interface IPagingOpts {
//     itemsPerPage: number;
//     pageNumber: number;
// }

// CRUD Abstract Store
export abstract class CRUDStore {
    @observable
    public getResult: IPromiseBasedObservable<any> = null;
    @observable
    public createResult: IPromiseBasedObservable<any> = null;
    @observable
    public updateResult: IPromiseBasedObservable<any> = null;
    @observable
    public patchResult: IPromiseBasedObservable<any> = null;
    @observable
    public deleteResult: IPromiseBasedObservable<any> = null;

    @observable
    public selectedItemData: any = null;

    @observable
    public search: string = '';
    public searchTimer: any = null;

    // @observable
    // public pagingParams: IPagingOpts = {
    //     itemsPerPage: defaultItemsPerPage,
    //     pageNumber: 1,
    // };

    // @observable
    // public privateItemsTotalCountObservable: ILazyObservable<number> = lazyObservable((sink) =>
    //     this.entityApi.totalCount()
    //         .then((count: number) => sink(count))
    //         .catch(() => sink('N/A'))
    //     , null);

    public itemsFilters: any = null;
    public itemsFiltersCounters: any = null;

    @observable
    public activeFilter: string = null;

    @observable
    public itemsObservable: ILazyObservable<any> = lazyObservable((sink) =>
        // this.entityApi.getAllPaged(this.pagingParams.itemsPerPage, this.pagingParams.pageNumber)
        this.entityApi.getAll()
            .then((itemsData) => sink(itemsData))
            .catch(() => sink([]))
        , null);

    public getItemTransformer = createTransformer((id: string) => {
        return fromPromise(this.entityApi.get(id));
    });

    private entityApi: CRUDAPI = null;

    constructor(entityApi: CRUDAPI) {
        this.entityApi = entityApi;
        // if (this.itemsFilters) {
        //     this.onFilterChange(Object.keys(this.itemsFilters)[0]);
        // }
    }

    @action
    public setSelectedItemData(itemData) {
        this.selectedItemData = itemData;
    }

    @action.bound
    public getItem(itemId) {
        this.getResult = fromPromise(
            this.entityApi.get(itemId)
                .then((item) => {
                    return this.populateItem ? this.populateItem(item) : item;
                })
                .then((populatedItem) => {
                    this.setSelectedItemData(populatedItem);
                })
                .catch(({ message }) => {
                    toast.error(message);
                }),
        );

        return this.getResult;
    }

    @action.bound
    public createItem({id, ...item}) {
        this.itemsObservable.reset();
        this.createResult = fromPromise(
            this.entityApi.create(id, item)
                .then(() => {
                    toast.success('Successful create');
                    this.itemsObservable.refresh();
                })
                .catch(({ message }) => {
                    toast.error(message);
                    this.itemsObservable.refresh();
                }),
        );
    }

    @action.bound
    public updateItem({ id, ...data }) {
        this.itemsObservable.reset();
        this.updateResult = fromPromise(
            this.entityApi.update(id, data)
                .then((item) => {
                    toast.success('Successful update');
                    this.setSelectedItemData(item);
                    this.itemsObservable.refresh();
                })
                .catch(({ message }) => {
                    toast.error(message);
                    this.itemsObservable.refresh();
                }),
        );
    }

    @action.bound
    public deleteItem(itemId) {
        this.itemsObservable.reset();
        this.deleteResult = fromPromise(this.entityApi.delete(itemId)
            .then((item) => {
                toast.success('Successfully deactivated');
                this.setSelectedItemData(item);
                // this.privateItemsTotalCountObservable.refresh();
                this.itemsObservable.refresh();
            })
            .catch(() => {
                // this.privateItemsTotalCountObservable.refresh();
                this.itemsObservable.refresh();
            }),
        );

        return this.deleteResult;
    }

    @action
    public resetCreate() {
        this.createResult = null;
    }

    @action
    public resetUpdate() {
        this.updateResult = null;
        // this.selectedItemData = null;
        // this.getResult = null;
    }

    @action.bound
    public refreshItems() {
        // this.privateItemsTotalCountObservable.refresh();
        this.itemsObservable.reset();
        this.itemsObservable.refresh();
    }

    // @action
    // public setPagingParams(itemsPerPage: number, pageNumber: number) {
    //     this.pagingParams = { itemsPerPage, pageNumber };
    //     this.refreshItems();
    // }

    @action
    public onSearchChange = ({ target: { value } }) => {
        this.search = value;
        if (this.searchTimer) {
            clearTimeout(this.searchTimer);
        }
        this.searchTimer = setTimeout(() => {
            console.log('Filter changed:', this.search);
        }, 300);
    }

    // @action
    // public onFilterChange = (filter: string) => {
    //     if (!(filter in this.itemsFilters)) {
    //         throw new Error('Filter not found on stores itemsFilter');
    //     }

    //     this.activeFilter = filter;

    //     this.itemsObservable = lazyObservable((sink) =>
    //         this.itemsFilters[filter](this.pagingParams.itemsPerPage, this.pagingParams.pageNumber)
    //             .then((itemsData) => sink(itemsData))
    //             .catch(() => sink([]))
    //         , null);

    //     this.privateItemsTotalCountObservable = lazyObservable((sink) =>
    //         this.itemsFiltersCounters[filter]()
    //             .then((count: number) => sink(count))
    //             .catch(() => sink('N/A'))
    //         , null);
    // }

    @computed
    @itemsWithState
    public get itemsState(): IItemsWithState {
        return this.itemsObservable.current();
    }

    // @computed
    // public get itemsTotalCountObs() {
    //     const totalCount = this.privateItemsTotalCountObservable.current();
    //     if (totalCount === null) {
    //         return { isLoading: true, totalCount: 0 };
    //     }

    //     return { isLoading: false, totalCount };
    // }

    @action
    public resetSelectedItem() {
        this.selectedItemData = null;
    }

    public populateItem?(item: any): Promise<any>;
}

export default CRUDStore;
