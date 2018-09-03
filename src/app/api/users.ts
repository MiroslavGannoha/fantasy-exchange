import { AccessLevel } from '../constants';
import { call, CRUDAPI } from './utils';

export interface IPersona {
    title: string;
    content: string;
    firmId: string;
    published: boolean;
    accessLevel: AccessLevel;
}

class UsersApi extends CRUDAPI {

    constructor() {
        super('personas');
    }

    public update(targetUserId: string, persona: Partial<IPersona>): Promise<any[]> {
        return call('setCustomClaims', { accessLevel: persona.accessLevel, targetUserId });
    }

    public delete(targetId: string): Promise<any> {
        return call('deleteUser', { targetId });
    }

    public registerNewUser(email: string, password: string, displayName: string): Promise<any> {
        return call('registerNewUser', { email, password, displayName });
    }
}

export const usersApi = new UsersApi();
