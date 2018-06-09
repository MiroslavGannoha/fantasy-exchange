import { extendObservable, action } from 'mobx';

export class AppStore {
    public title: any;
    public setTitle = action((title) => {
        this.title = title;
    });

    constructor() {
        extendObservable(this, {
            title: 'MobX Router Tutorial',
            user: null,
        });
    }

}
