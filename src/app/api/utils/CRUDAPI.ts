
import { toast } from 'react-toastify';

const db: any = {};

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
