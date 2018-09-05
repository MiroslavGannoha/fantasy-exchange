import { CRUDAPI } from './utils';

export interface IRight {
    holderId: string;
    playerId: string;
    volume: string;
}

class RightsApi extends CRUDAPI {
    constructor() {
        super('rights');
    }
}

export const rightsApi = new RightsApi();
