import { CRUDAPI, call } from './utils';
import { toast } from 'react-toastify';

export interface IOffer {
    volume: number;
    startingPrice: number;
    duration: string;
    sellerId: string;
    playerId: string;
}

class OffersApi extends CRUDAPI {
    constructor() {
        super('offers');
    }
    public create(data): Promise<any> {
        return call('createOffer', data)
            .catch((error) => {
                toast.error(`Adding item to ${this.collectionName} - ${error.message}`);
                return error;
            });
    }
}

export const offersApi = new OffersApi();
