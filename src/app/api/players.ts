import { CRUDAPI } from './utils';
import { PlayerRole } from '../constants/playerRoles';

export interface IPlayer {
    nickname: string;
    name: string;
    steamId: number;
    role: PlayerRole;
    countryCode: string;
}

class PlayersApi extends CRUDAPI {
    constructor() {
        super('players');
    }
}

export const playersApi = new PlayersApi();
