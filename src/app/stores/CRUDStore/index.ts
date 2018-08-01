import { computed, action, observable } from 'mobx';
import { lazyObservable, ILazyObservable, fromPromise, IPromiseBasedObservable } from 'mobx-utils';
import MobxReactForm from 'mobx-react-form';
import { toast } from 'react-toastify';
import { Form } from '../Utils';
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
    public createForm: MobxReactForm = null;
    @observable
    public updateForm: MobxReactForm = null;

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

    @action
    public initCreateForm(createFields: any[]) {
        if (!this.createForm) {
            this.createForm = new Form(createFields, this.onCreateFormValid);
        }

        this.createForm.update({ firmId: 'e7c6395c-f75f-417e-86a8-8429f3600c69' });
    }

    @action
    public initUpdateForm(updateFields: any[]) {
        if (!this.updateForm) {
            this.updateForm = new Form(updateFields, this.onUpdateFormValid);
        }

        this.updateForm.set({ ...this.selectedItemData, ...{ firmId: 'e7c6395c-f75f-417e-86a8-8429f3600c69' } });
    }

    @action
    public setSelectedItemData(itemData) {
        this.selectedItemData = itemData;
    }

    @action.bound
    public onCreateFormValid(form) {
        const formData = form.values();
        this.createResult = fromPromise(
            this.entityApi.create(formData).then(() => toast.success('Success')),
        );
    }

    @action.bound
    public onUpdateFormValid(form) {
        const { id, ...formData } = form.values();

        this.updateResult = fromPromise(
            this.entityApi.update(id, formData).then(() => toast.success('Success')),
        );
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
        if (this.createForm) { this.createForm.clear(); }
    }

    @action
    public resetUpdate() {
        this.updateResult = null;
        this.selectedItemData = null;
        if (this.updateForm) { this.updateForm.clear(); }
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
