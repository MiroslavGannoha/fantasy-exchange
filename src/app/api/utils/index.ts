// @ts-ignore
import firebase from 'firebase/app';
import 'firebase/functions';
import { toast } from 'react-toastify';
// import { initFirestorter } from 'firestorter';
// import { FirebaseFirestore } from '@firebase/firestore-types';

export * from './CRUDAPI';

// initFirestorter({ firebase });

export const call = (methodName: string, reqData?: any) =>
    firebase.functions().httpsCallable(methodName)(reqData)
        .then(({ data }) => { toast.success('Successful: ' + methodName); return data; })
        .catch((error) => { toast.error(error.message); throw error; });
