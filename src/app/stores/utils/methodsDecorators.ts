import { emptyVal } from '../../constants';

export interface IItemsWithState {
    pendingItems: boolean;
    items: any[];
}

export function itemsWithState(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalGet = descriptor.get;
    descriptor.get = function(): IItemsWithState {
        const items = originalGet.apply(this);
        if (items === null) { // null - default val = loading
            return { pendingItems: true, items: [] };
        } else if (items === emptyVal) { // '' = empty data server response, no records
            return { pendingItems: false, items: [] };
        } else {
            return {
                pendingItems: false,
                items: this.populateItemsFields ? items.map(this.populateItemsFields) : items,
            }; // successful data fetch
        }
    };

    return descriptor;
}

export interface IItemWithState {
    pendingItem: boolean;
    item: any;
}

export function itemWithState(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalGet = descriptor.get;
    descriptor.get = function(): IItemWithState {
        const item = originalGet.apply(this);
        if (item === null) { // null - default val = loading
            return { pendingItem: true, item: null };
        } else if (item === emptyVal) { // '' = empty data server response, no records
            return { pendingItem: false, item: null };
        } else {
            return {
                pendingItem: false,
                item,
            }; // successful data fetch
        }
    };

    return descriptor;
}
