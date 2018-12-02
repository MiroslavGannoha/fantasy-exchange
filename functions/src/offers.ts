import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
const db = admin.firestore();

export const createOffer = functions.https.onCall((data, context) => {
    return db.collection('offers').add({...data, sellerId: context.auth.uid});
});