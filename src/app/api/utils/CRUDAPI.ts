
// @ts-ignore
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import { FirebaseFirestore } from '@firebase/firestore-types';
import { initFirestorter } from 'firestorter';

firebase.initializeApp({
    apiKey: 'AIzaSyD94yAtoXu1JWEm635t-d53BGO1AMo1-WU',
    authDomain: 'fantasy-exchange.firebaseapp.com',
    databaseURL: 'https://fantasy-exchange.firebaseio.com',
    projectId: 'fantasy-exchange',
    storageBucket: 'gs://fantasy-exchange.appspot.com',
    messagingSenderId: '117336781687',
});

console.log(firebase);
const db: FirebaseFirestore = firebase.firestore();

db.settings({ timestampsInSnapshots: true});

initFirestorter({ firebase });

export abstract class CRUDAPI {
    public collectionName: string = null;

    constructor(collectionName: string) {
        if (!collectionName) {
            throw new Error('Collection Name not specified!');
        }

        this.collectionName = collectionName;
    }

    public getAll(): Promise<any[]> {
        return db.collection(this.collectionName).get()
            .then((qs) => qs.docs.map((doc) => ({ ...{ docId: doc.id }, ...doc.data() })));
    }

    public get(docId: string): Promise<any> {
        return db.collection(this.collectionName).doc(docId).get()
            .then((doc) => doc.data());
    }

    public create(docId: string, item): Promise<any> {
        if (docId) {
            return db.collection(this.collectionName).doc(docId).set(item);
        } else {
            return  db.collection(this.collectionName).add(item);
        }
        return db.collection(this.collectionName).doc(docId).set(item);
    }

    public update(docId: string, item): Promise<any> {
        return db.collection(this.collectionName).doc(docId).update(item);
    }

    public delete(docId: string): Promise<any> {
        return db.collection(this.collectionName).doc(docId).delete();
    }
}
