
// @ts-ignore
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import { FirebaseFirestore } from '@firebase/firestore-types';
import { initFirestorter } from 'firestorter';
import { toast } from 'react-toastify';

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
            .then((qs) => qs.docs.map((doc) => ({ ...{ docId: doc.id }, ...doc.data() })))
            .catch((error) => {
                toast.error(`Get all ${this.collectionName} - ${error.message}`);
                return error;
            });
    }

    public get(docId: string): Promise<any> {
        return db.collection(this.collectionName).doc(docId).get()
            .then((doc) => doc.data())
            .catch((error) => {
                toast.error(`Get item from ${this.collectionName} - ${error.message}`);
                return error;
            });
    }

    public create(item, docId: string): Promise<any> {
        if (docId) {
            return db.collection(this.collectionName).doc(docId).set(item)
                .catch((error) => {
                    toast.error(`Add item to ${this.collectionName} - ${error.message}`);
                    return error;
                });
        } else {
            return  db.collection(this.collectionName).add(item)
                .catch((error) => {
                    toast.error(`Add item to ${this.collectionName} - ${error.message}`);
                    return error;
                });
        }
        return db.collection(this.collectionName).doc(docId).set(item)
            .catch((error) => {
                toast.error(`Add item to ${this.collectionName} - ${error.message}`);
                return error;
            });
    }

    public update(item, docId: string): Promise<any> {
        return db.collection(this.collectionName).doc(docId).update(item)
            .catch((error) => {
                toast.error(`Update item from ${this.collectionName} - ${error.message}`);
                return error;
            });
    }

    public delete(docId: string): Promise<any> {
        return db.collection(this.collectionName).doc(docId).delete()
            .catch((error) => {
                toast.error(`Delete item from ${this.collectionName} - ${error.message}`);
                return error;
            });
    }
}
