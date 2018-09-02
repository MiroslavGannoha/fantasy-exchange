// @ts-ignore
import firebase from 'firebase/app';
import 'firebase/functions';
import 'firebase/database';
import { AccessLevel } from '../constants';
import { toast } from 'react-toastify';
import { initFirestorter } from 'firestorter';
import { FirebaseFirestore } from '@firebase/firestore-types';

firebase.initializeApp({
    apiKey: 'AIzaSyD94yAtoXu1JWEm635t-d53BGO1AMo1-WU',
    authDomain: 'fantasy-exchange.firebaseapp.com',
    databaseURL: 'https://fantasy-exchange.firebaseio.com',
    projectId: 'fantasy-exchange',
    storageBucket: 'gs://fantasy-exchange.appspot.com',
    messagingSenderId: '117336781687',
});

initFirestorter({ firebase });

const db: FirebaseFirestore = firebase.firestore();

export interface IPersona {
    title: string;
    content: string;
    firmId: string;
    published: boolean;
    accessLevel: AccessLevel;
}

const call = (methodName: string, reqData?: any) =>
    firebase.functions().httpsCallable(methodName)(reqData)
        .then(({ data }) => { toast.success('Successful: ' + methodName); return data; })
        .catch((error) => { toast.error(error.message); throw error; });

export const getAll = (): Promise<any> =>
    db.collection('personas').get().then((qs) => qs.docs.map((doc) => ({ ...{ id: doc.id }, ...doc.data() })));

export const get = (userId: string): Promise<any> =>
    call('getAllUsers');

export const create = (persona: IPersona): Promise<any> =>
    call('getAllUsers');

export const update = (targetUserId: string, persona: Partial<IPersona>): Promise<any> =>
    call('setCustomClaims', { accessLevel: persona.accessLevel, targetUserId });

export const remove = (targetId: string): Promise<any> =>
    call('deleteUser', { targetId });

export const registerNewUser = (email: string, password: string, displayName: string): any =>
    call('registerNewUser', { email, password, displayName });

export const setAccessLevel = (targetUserId: string, accessLevel: AccessLevel): any =>
    call('setCustomClaims', { accessLevel, targetUserId });

export default { getAll, get, create, update, remove, setAccessLevel };
