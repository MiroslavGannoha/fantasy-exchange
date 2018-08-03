// import { AuthStore } from '../stores/AuthStore';
// @ts-ignore
import firebase from 'firebase/app';
import 'firebase/functions';
import { AccessLevel } from '../constants';
import { AuthStore } from '../stores';
import { toast } from 'react-toastify';

firebase.initializeApp({
    apiKey: 'AIzaSyD94yAtoXu1JWEm635t-d53BGO1AMo1-WU',
    authDomain: 'fantasy-exchange.firebaseapp.com',
    databaseURL: 'https://fantasy-exchange.firebaseio.com',
    projectId: 'fantasy-exchange',
    storageBucket: 'gs://fantasy-exchange.appspot.com',
    messagingSenderId: '117336781687',
});

export interface IPersona {
    title: string;
    content: string;
    firmId: string;
    published: boolean;
}

const authStore = AuthStore.getInstance();

const call = (methodName: string, reqData?: any) =>
    firebase.functions().httpsCallable(methodName)(reqData)
        .then(({ data }) => { toast.success('Successful: ' + methodName); return data; })
        .catch((error) => { toast.error(error.message); throw error; });

export const getAll = (): Promise<any> =>
    call('getAllUsers');

export const get = (personaId: string): Promise<any> =>
    call('getAllUsers');

export const create = (persona: IPersona): Promise<any> =>
    call('getAllUsers');

export const update = (personaId: string, persona: Partial<IPersona>): Promise<any> =>
    call('getAllUsers');

export const remove = (personaId: string): Promise<any> =>
    call('getAllUsers');

export const setAccessLevel = (targetUserId: string, accessLevel: AccessLevel): any =>
    call('setCustomClaims', { accessLevel, targetUserId, idToken: authStore.token });

export default { getAll, get, create, update, remove, setAccessLevel };
